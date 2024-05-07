import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { InputCepService } from '../../services/input-cep.service';
import { EnderecoInterface } from './endereco.interface';

@Component({
  selector: 'app-input-cep',
  templateUrl: './input-cep.component.html',
  styleUrls: ['./input-cep.component.scss'],
})
export class InputCepComponent implements OnInit {
  @Output() onEvent: EventEmitter<EnderecoInterface> =
    new EventEmitter<EnderecoInterface>();

  @Input() form!: FormGroup;
  @Input() type: string = 'text';
  @Input() class = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() placeholder = '';

  public cepSoTemNumeros = true;

  constructor(private inputCepService: InputCepService) {}

  ngOnInit(): void {}

  onLoadCep() {
    let cep = this.form.controls['cep'].value;
    cep = cep.replace('-', '');
    const cepValid = this.validCep(cep);
    if (cepValid) {
      this.getCep(cep);
    }
  }

  validCep(cep: string): boolean {
    let validacao = true;

    if (cep.length !== 8) {
      validacao = false;
    }

    if (isNaN(Number(cep))) {
      this.cepSoTemNumeros = false;
      validacao = false;
    }

    if (!validacao) {
      throw new Error('CEP Inválido');
    }
    return validacao;
  }

  getCep(cep: string) {
    this.inputCepService.getAll(cep).subscribe((endereco) => {
      const value: EnderecoInterface = endereco;
      this.onEvent.emit(value);
    });
  }

  formatadorCep(event: Event) {
    const cep = this.form.get('cep')?.value;
    const isValid: boolean = this.cepIsValid(cep);

    if (isValid) {
      const formatedCep: string = this.formatedCep(cep);
      this.form.controls['cep'].setValue(formatedCep);
      if (
        cep.length === 6 &&
        event instanceof InputEvent &&
        event.inputType === 'deleteContentBackward'
      ) {
        let newCep = cep.slice(0, -1);
        this.form.controls['cep'].setValue(newCep);
      }
    } else {
      let newCep = cep.slice(0, -1);
      this.form.controls['cep'].setValue(newCep);
    }
  }

  cepIsValid(cep: string): boolean {
    if (cep.length <= 9) {
      return true;
    } else {
      return false;
    }
  }

  formatedCep(cep: string): string {
    if (cep.length === 5) {
      cep += '-';
    }
    return cep;
  }
}
