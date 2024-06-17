import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Animais } from '../../models/animais';
import { SelectAnimaisClienteService } from '../../services/select-animais-cliente.service';

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
  constructor() {} // private selectCidadesService: SelectCidadesService

  ngOnDestroy(): void {}

  async ngOnInit(): Promise<void> {
    // await this.buscarCidades();
    this.listeners();
  }

  listeners(): void {
    this.form.controls[this.animal].valueChanges.subscribe((evt) => {
      const res = this.animais.find((el) => el.nome === evt);
      this.form.controls[this.frmName].setValue(res?.idAnimal);
    });
  }

  // async buscarCidades() {
  //   const res = await this.selectAnimaisCidadesService.BuscarCidades();

  //   if (!res) {
  //     alert('DEU Errado');
  //     return;
  //   }

  //   this.animais = res;
  // }

  // onSelect(animal: Cidades) {
  //   console.log(animal);
  // }
}
