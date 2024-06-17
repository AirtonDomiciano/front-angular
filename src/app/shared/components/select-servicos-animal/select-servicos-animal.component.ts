import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServicosAnimalInterface } from '../../interface/servicos-animal.interface';
import { ServicosAnimalService } from 'src/app/services/servicos-animal.service';

@Component({
  selector: 'app-select-servicos-animal',
  templateUrl: './select-servicos-animal.component.html',
  styleUrls: ['./select-servicos-animal.component.scss'],
})
export class SelectServicosAnimalComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() frmClass = '';
  @Input() frmName = '';

  public listaServicos: ServicosAnimalInterface[] = [];

  constructor(private servicosAnimalService: ServicosAnimalService) {}

  async ngOnInit(): Promise<void> {
    await this.buscarServicosAnimal();
  }

  async buscarServicosAnimal(): Promise<void> {
    const res = await this.servicosAnimalService.buscarTodosServicos();

    this.listaServicos = res;
  }
}
