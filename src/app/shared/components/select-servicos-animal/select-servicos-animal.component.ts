import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServicosAnimalInterface } from '../../interface/servicos-animal.interface';
import { ServicosAnimalService } from 'src/app/services/servicos-animal.service';
import { ProdutosServicoService } from 'src/app/services/produtos-servico.service';
import { ProdutosServicoInterface } from '../../interface/produtos-atendimento.interface';

@Component({
  selector: 'app-select-servicos-animal',
  templateUrl: './select-servicos-animal.component.html',
  styleUrls: ['./select-servicos-animal.component.scss'],
})
export class SelectServicosAnimalComponent implements OnInit {
  @Output() emitterProdutosServicosAnimal: EventEmitter<
    Array<ProdutosServicoInterface>
  > = new EventEmitter<Array<ProdutosServicoInterface>>();
  @Output() emitterServicoAnimal: EventEmitter<number> =
    new EventEmitter<number>();

  @Input() form!: FormGroup;
  @Input() frmClass = '';
  @Input() frmName = '';
  @Input() servicoAnimal = '';

  public listaServicos: ServicosAnimalInterface[] = [];

  constructor(
    private servicosAnimalService: ServicosAnimalService,
    private produtosServicoService: ProdutosServicoService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.buscarServicosAnimal();
  }

  async buscarServicosAnimal(): Promise<void> {
    const res = await this.servicosAnimalService.buscarTodosServicos();

    this.listaServicos = res;
  }

  async carregarProdutosServico(): Promise<void> {
    const servicoAnimal = this.form.controls[this.servicoAnimal].value;

    const res =
      await this.produtosServicoService.buscarProdutosPorIdServicosAnimal(
        servicoAnimal.idServicosAnimal
      );

    this.emitterProdutosServicosAnimal.emit(res);
  }
  async carregarServico() {
    const res: ServicosAnimalInterface =
      this.form.controls[this.servicoAnimal].value;

    this.emitterServicoAnimal.emit(res.idServicosAnimal!);
  }
}
