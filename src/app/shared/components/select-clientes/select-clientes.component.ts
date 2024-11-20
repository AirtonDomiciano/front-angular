import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SelectClientesService } from '../../services/select-clientes.service';
import Clientes from '../../model/clientes';

@Component({
  selector: 'app-select-clientes',
  templateUrl: './select-clientes.component.html',
  styleUrls: ['./select-clientes.component.scss'],
})
export class SelectClientesComponent implements OnInit {
  @Output() emitterIdCliente: EventEmitter<number> = new EventEmitter<number>();

  @Input() form!: FormGroup;
  @Input() class = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() cliente = '';
  @Input() placeholder = '';

  public clientes!: Clientes[];

  constructor(private selectClientesService: SelectClientesService) {}

  async ngOnInit(): Promise<void> {
    await this.buscarClientes();
    this.listeners();
  }

  async buscarClientes(): Promise<void> {
    const res = await this.selectClientesService.BuscarTodosClientes();

    if (!res) {
      alert('Ops.. Algo deu errado');
      return;
    }
    this.clientes = res;
  }

  listeners(): void {
    if (!this.form.value) {
      this.form.controls[this.cliente].valueChanges.subscribe((evt) => {
        const res = this.clientes.find((el) => el.nomeClientes === evt);
        this.form.controls[this.frmName].setValue(res?.idClientes);
      });
    }
  }

  emitirIdClientes() {
    const idClientes = this.form.controls[this.frmName].value;
    this.emitterIdCliente.emit(Number(idClientes));
  }
}
