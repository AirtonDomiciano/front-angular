import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import ClientesInterface from '../../models/clientes.interface';
import { SelectClientesService } from '../../services/select-clientes.service';

@Component({
  selector: 'app-select-clientes',
  templateUrl: './select-clientes.component.html',
  styleUrls: ['./select-clientes.component.scss'],
})
export class SelectClientesComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() class = 'form-control rounded-pill';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  public clientes!: ClientesInterface[];

  constructor(private selectClientesService: SelectClientesService) {}

  async ngOnInit(): Promise<void> {
    await this.buscarClientes();
  }

  async buscarClientes(): Promise<void> {
    const res = await this.selectClientesService.BuscarTodosClientes();

    if (!res) {
      alert('Ops.. Algo deu errado');
      return;
    }
    this.clientes = res;
  }
}
