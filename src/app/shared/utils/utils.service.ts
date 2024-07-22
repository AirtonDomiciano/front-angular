import { Injectable } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  setarCamposRequeridos<T>(model: T, form: FormGroup) {
    const campos = Object.keys(model!);

    for (let campo of campos) {
      form.controls[campo].setValidators(Validators.required);
    }
  }
}
