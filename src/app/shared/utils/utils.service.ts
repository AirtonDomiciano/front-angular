import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  setarCamposRequeridos(campos: Array<string>, form: FormGroup) {
    for (let campo of campos) {
      form.controls[campo].setValidators(Validators.required);
    }
  }
}
