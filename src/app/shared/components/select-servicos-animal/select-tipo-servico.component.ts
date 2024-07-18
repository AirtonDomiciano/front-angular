import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProdutosServicoService } from 'src/app/services/produtos-servico.service';
import { TipoServicoInterface } from '../../interface/tipo-servico.interface';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';
import ProdutosServico from '../../interface/produtos-servico.interface';

@Component({
  selector: 'app-select-tipo-servico',
  templateUrl: './select-tipo-servico.component.html',
  styleUrls: ['./select-tipo-servico.component.scss'],
})
export class SelectTipoServicoComponent implements OnInit {
  @Output() emitterProdutosTipoServico: EventEmitter<Array<ProdutosServico>> =
    new EventEmitter<Array<ProdutosServico>>();
  @Output() emitterTipoServico: EventEmitter<number> =
    new EventEmitter<number>();

  @Input() form!: FormGroup;
  @Input() frmClass = '';
  @Input() frmName = '';
  @Input() tipoServico = '';

  public listaServicos: TipoServicoInterface[] = [];

  constructor(
    private tipoServicoService: TipoServicoService,
    private produtosServicoService: ProdutosServicoService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.buscarServicosAnimal();
  }

  async buscarServicosAnimal(): Promise<void> {
    const res = await this.tipoServicoService.buscarTodosServicos();

    this.listaServicos = res;
  }

  async carregarProdutosServico(): Promise<void> {
    const tipoServico = this.form.controls[this.tipoServico].value;

    const res =
      await this.produtosServicoService.buscarProdutosPorIdServicosAnimal(
        tipoServico.idTipoServico
      );

    this.emitterProdutosTipoServico.emit(res);
  }

  async carregarServico() {
    const res: TipoServicoInterface =
      this.form.controls[this.tipoServico].value;

    this.emitterTipoServico.emit(res.idTipoServico!);
  }
}
