import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfiguracaoServicoModel } from './model/configuracao-servico.model';
import { ProdutosServicoService } from 'src/app/services/produtos-servico.service';
import ProdutosServicoModel from './model/produtos-servico.model';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import { Router } from '@angular/router';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import ProdutosServico from 'src/app/shared/model/produtos-servico';
import { ProdutosService } from 'src/app/services/produtos.service';
import Produto from 'src/app/shared/model/produtos';

@Component({
  selector: 'app-configuracao-servico',
  templateUrl: './configuracao-servico.component.html',
  styleUrls: ['./configuracao-servico.component.scss'],
})
export class ConfiguracaoServicoComponent implements OnInit {
  @Output() emitterToast: EventEmitter<boolean> = new EventEmitter<boolean>();

  public form!: FormGroup;
  public model: ConfiguracaoServicoModel = new ConfiguracaoServicoModel();
  public produtosSelecionados: Produto[] = [];
  public servicoSelecionado: number = 0;

  constructor(
    private fb: FormBuilder,
    private produtosServicoService: ProdutosServicoService,
    private utils: UtilsService,
    private router: Router,
    private toast: ToastMessageService,
    private produtosService: ProdutosService
  ) {
    this.form = this.fb.group(this.model);
  }

  ngOnInit(): void {
    this.setarCamposObrigatorios();
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      this.toast.mostrarAviso('É preciso preencher todos os campos.');
      return;
    }
    const input: ConfiguracaoServicoModel = this.form.value;
    const obj: ProdutosServicoModel[] = [];

    if (input.tipoServico.idTipoServico === 0) {
      this.toast.mostrarAviso('É preciso preencher todos os campos.');
      return;
    }

    await this.produtosServicoService.deletarPorIdTipoServico(
      input.tipoServico.idTipoServico
    );

    for (let produto of input.produtos) {
      obj.push({
        idTipoServico: input.tipoServico.idTipoServico,
        idProdutos: produto.idProdutos!,
      });
    }

    const res = await this.produtosServicoService.salvarLista(obj);
    console.log(res);

    this.emitterToast.emit(res);
    this.toast.mostrarSucesso('Configuração concluída!');
    this.router.navigate([`private/atendimento`]);
  }

  setarCamposObrigatorios() {
    const campo: Array<string> = ['tipoServico', 'produtos'];
    this.utils.setarCamposRequeridos(campo, this.form);
  }

  async setarProdutos(produtosServico: ProdutosServico[]) {
    const produtos = await this.produtosService.BuscarTodosProdutos();

    for (let i of produtosServico) {
      const salvar = produtos.find((el) => el.idProdutos === i.idProdutos);

      if (salvar) {
        this.produtosSelecionados.push(salvar);
      }

      this.form.controls['produtos'].setValue(this.produtosSelecionados);
    }
  }

  setarServicoSelecionado(id: number) {
    this.servicoSelecionado = id;
  }
}
