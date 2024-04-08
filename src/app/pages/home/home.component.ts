import { Component, Input } from '@angular/core';
import { ProductsModel } from '../product/product.model';
// import { Route } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  // constructor(rotas: Route){
  // }

  @Input() novosProdutos: ProductsModel[] = [];
}
