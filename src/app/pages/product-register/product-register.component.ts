import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { productsModel } from '../product/product.model';
import { produtosMock } from '../product/product.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss'],
})
export class ProductRegisterComponent {
  public productRegisterFormGroup: UntypedFormGroup;
  public precoIsWrong: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.productRegisterFormGroup = this.fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productRegisterFormGroup.valid) {
      const validation: boolean = this.validationSave(
        this.productRegisterFormGroup.value
      );
      let input: productsModel = this.productRegisterFormGroup.value;

      if (validation) {
        if (produtosMock.length < 1) {
          input.id = 1;
        } else {
          let newId = produtosMock[produtosMock.length - 1].id! + 1;
          input.id = newId;
        }
        produtosMock.push(input);
        this.router.navigate([`products`]);
      }
    }
  }

  validationSave(input: productsModel): boolean {
    let validation = true;

    if (input.preco <= 0) {
      this.precoIsWrong = true;
      validation = false;
    }

    return validation;
  }
}
