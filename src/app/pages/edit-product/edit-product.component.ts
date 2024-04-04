import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntypedFormGroup, FormBuilder } from '@angular/forms';
import { productsModel } from '../product/product.model';
import { produtosMock } from '../product/product.mock';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss'],
})
export class EditProductComponent implements OnInit {
  public productFormGroup: UntypedFormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: productsModel;
  public product = new productsModel();

  public index = produtosMock.findIndex((el) => el.id === this.id);

  constructor(
    fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.model = produtosMock[this.index];
    this.productFormGroup = fb.group(this.model);
  }

  ngOnInit(): void {
    this.product = produtosMock[this.index];

    this.productFormGroup.controls['nome'].setValidators([Validators.required]);
    this.productFormGroup.controls['categoria'].setValidators([
      Validators.required,
    ]);
    this.productFormGroup.controls['preco'].setValidators([
      Validators.required,
    ]);
    this.productFormGroup.controls['descricao'].setValidators([
      Validators.required,
    ]);
  }

  onSubmit() {
    if (this.productFormGroup.valid) {
      let input: productsModel = this.productFormGroup.value;

      produtosMock[this.index] = input;
      this.router.navigate([`product`]);
    }
  }
}
