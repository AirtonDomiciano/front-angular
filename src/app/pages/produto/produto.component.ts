import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ProdutosModel } from '../produtos/model/produtos.model';
import Produto from 'src/app/shared/model/produtos';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';

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
    private utilsService: UtilsService
  ) {
    this.formGroup = this.fb.group(this.model);
  }

  async ngOnInit(): Promise<void> {
    this.setarCamposRequiridos();
    this.titulo = this.id > 0 ? 'Editar Produto' : 'Cadastrar Produto';

    if (this.id) {
      const res = await this.produtosService.BuscarProdutoPorId(this.id);

      const produto = res;

      this.formGroup.controls['nomeProduto'].setValue(produto.nomeProduto);
      this.formGroup.controls['qtdeTotal'].setValue(produto.qtdeTotal);
      this.formGroup.controls['imagem'].setValue(produto.imagem);
      this.formGroup.controls['valor'].setValue(produto.valor);
    }
  }

  async onSubmit(): Promise<void> {
    let input: Produto = this.formGroup.value;
    const validation: boolean = this.validationSave(this.formGroup.value);

    if (this.formGroup.invalid) {
      this.toast.mostrarAviso(
        'É preciso preencher todos os campos para prosseguir.'
      );
      return;
    }

    if (this.id) {
      input.idProdutos = this.id;
    }

    if (this.id) {
      if (validation) {
        const res = await this.produtosService.salvar(input);
        if (res) {
          this.toast.mostrarSucesso('Edição Concluída!');
          this.router.navigate([`private/produtos`]);
        } else {
          this.toast.mostrarErro('Algo deu errado!');
        }
      }
      return;
    }
    if (validation) {
      const res = await this.produtosService.salvar(input);
      if (res) {
        this.toast.mostrarSucesso('Produto adicionado com sucesso!');
        this.router.navigate([`private/produtos`]);
      } else {
        this.toast.mostrarErro('Algo deu errado!');
      }
    }
  }

  validationSave(input: ProdutosModel): boolean {
    let validation = true;

    if (
      !input.qtdeTotal ||
      !input.imagem ||
      !input.nomeProduto ||
      !input.valor
    ) {
      validation = false;
    }

    return validation;
  }

  setarCamposRequiridos() {
    const campos: Array<string> = [
      'nomeProduto',
      'qtdeTotal',
      'imagem',
      'valor',
      'ativo',
    ];

    this.utilsService.setarCamposRequeridos(campos, this.formGroup);
  }
}
