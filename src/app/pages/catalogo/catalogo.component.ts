import { Component } from '@angular/core';
import { produtosMock } from '../product/product.mock';
import { ProductsModel } from '../product/product.model';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent {
  public produtos: ProductsModel[] = produtosMock;
}
