import { Component, Input, OnInit } from '@angular/core';
import { ProductsModel } from '../product/product.model';
import { produtosMock } from '../product/product.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public newProducts: ProductsModel[] = [];
  public length: number = produtosMock.length;

  ngOnInit(): void {
    this.newProducts = produtosMock.slice(this.length - 5, this.length);
    this.newProducts.reverse();
  }
}
