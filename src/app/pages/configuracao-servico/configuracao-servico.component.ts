import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfiguracaoServicoModel } from './model/configuracao-servico.model';
import { ProdutosServicoService } from 'src/app/services/produtos-servico.service';
import ProdutosServicoModel from './model/produtos-servico.model';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-configuracao-servico',
  templateUrl: './configuracao-servico.component.html',
  styleUrls: ['./configuracao-servico.component.scss'],
})
export class ConfiguracaoServicoComponent implements OnInit {
  @Output() emitterToast: EventEmitter<boolean> = new EventEmitter<boolean>();

  public form!: FormGroup;
  public model: ConfiguracaoServicoModel = new ConfiguracaoServicoModel();

  constructor(
    private fb: FormBuilder,
    private produtosServicoService: ProdutosServicoService,
    private utils: UtilsService
  ) {
    this.form = this.fb.group(this.model);
  }

  ngOnInit(): void {
    this.setarCamposObrigatorios();
  }

  async onSubmit(): Promise<void> {
    if (this.form.invalid) {
      return;
    }
    const input: ConfiguracaoServicoModel = this.form.value;
    const obj: ProdutosServicoModel[] = [];

    await this.produtosServicoService.deletarPorIdTipoServico(
      input.tipoServico.idTipoServico
    );

    for (let produto of input.produtos) {
      obj.push({
        idTipoServico: input.tipoServico.idTipoServico,
        idProdutos: String(produto.idProdutos),
      });
    }

    const res = await this.produtosServicoService.salvarLista(obj);

    this.emitterToast.emit(res);
  }

  setarCamposObrigatorios() {
    const campo: Array<string> = ['tipoServico', 'produtos'];
    this.utils.setarCamposRequeridos(campo, this.form);
  }
}
