import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectClientesService } from '../../services/select-clientes.service';
import Clientes from '../../model/clientes';

@Component({
  selector: 'app-select-clientes',
  templateUrl: './select-clientes.component.html',
  styleUrls: ['./select-clientes.component.scss'],
})
export class SelectClientesComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() class = 'container form-control rounded-pill';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  public clientes!: Clientes[];

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
