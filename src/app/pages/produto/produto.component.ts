import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ProdutosModel } from '../produtos/model/produtos.model';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import { ManipulaCampoAtivoService } from 'src/app/services/ativo.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  public formGroup: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public titulo: string = '';
  public model: ProdutosModel = new ProdutosModel();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService,
    private toast: ToastMessageService,
    private utilsService: UtilsService,
    private manipulaCampoAtivoService: ManipulaCampoAtivoService
  ) {
    this.formGroup = this.fb.group(this.model);
  }

  async ngOnInit(): Promise<void> {
    this.setarCamposRequiridos();
    this.titulo = this.id > 0 ? 'Editar Produto' : 'Cadastrar Produto';

    if (this.id) {
      this.editar();
    }
  }

  async editar(): Promise<void> {
    this.model = await this.produtosService.BuscarProdutoPorId(this.id);
    delete this.model.idProdutos;
    this.formGroup.setValue(this.model);
  }

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      this.toast.mostrarAviso(
        'É preciso preencher todos os campos para prosseguir.'
      );
      return;
    }

    const input: ProdutosModel = this.formGroup.value;

    if (this.id) input.idProdutos = this.id;

    const res = await this.produtosService.salvar(input);

    if (res) {
      if (this.id) {
        this.toast.mostrarSucesso('Edição Concluída!');
      } else {
        this.toast.mostrarErro('Produto cadastrado!');
      }
      this.router.navigate([`private/produtos`]);
      this.manipulaCampoAtivoService.atualizarValorAtivo(input.ativo);
    }
  }

  setarCamposRequiridos() {
    const campos: Array<string> = [
      'nomeProduto',
      'qtdeTotal',
      'imagem',
      'valor',
    ];

    this.utilsService.setarCamposRequeridos(campos, this.formGroup);
  }
}
