import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import Animais from '../../model/animais';
import { AnimaisService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-select-animais-cliente',
  templateUrl: './select-animais-cliente.component.html',
  styleUrls: ['./select-animais-cliente.component.scss'],
})
export class SelectAnimaisClienteComponent {
  @Input() form!: FormGroup;
  @Input() class = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() animal = '';

  public idAnimal!: number;
  public animais!: Animais[];

  constructor(private animaisService: AnimaisService) {}

  ngOnDestroy(): void {}

  async ngOnInit(): Promise<void> {
    this.animais = await this.animaisService.buscarTodos();
    this.listeners();
  }

  listeners(): void {
    if (!this.form.value) {
      this.form.controls[this.animal].valueChanges.subscribe((evt) => {
        const res = this.animais.find((el) => el.nome === evt);
        this.form.controls[this.frmName].setValue(res?.idAnimal);
      });
    }
  }

  async selecionarAnimaisDoCliente(id: number): Promise<void> {
    if (id) {
      this.animais = await this.animaisService.buscarPorIdClientes(id);
      return;
    }
    this.animais = await this.animaisService.buscarTodos();
  }
}
