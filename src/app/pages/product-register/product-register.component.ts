import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductsModel } from '../product/product.model';
import { produtosMock } from '../product/product.mock';

@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss'],
})
export class ProductRegisterComponent {
  public productRegisterFormGroup: UntypedFormGroup;
  public newProducts: ProductsModel[] = [];

  @Output() emitterNewProducts: EventEmitter<ProductsModel[]> =
    new EventEmitter<ProductsModel[]>();

  constructor(fb: FormBuilder) {
    this.productRegisterFormGroup = fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.productRegisterFormGroup.valid) {
      let input: ProductsModel = this.productRegisterFormGroup.value;

      if (produtosMock.length < 1) {
        input.id = 1;
      } else {
        let newId = produtosMock[produtosMock.length - 1].id! + 1;
        input.id = newId;
      }
      produtosMock.push(input);
      this.newProducts.push(input);
      this.emitterNewProducts.emit(this.newProducts);
    }
  }
}
