import { Component, OnInit } from '@angular/core';
import { ProductsCarrinhoInterface } from '../carrinho/carrinho.interface';
import { ShoppingMock } from './shopping.mock';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  public produtosComprados: ProductsCarrinhoInterface[] = [];

  ngOnInit(): void {
    for (var i = 0; i < ShoppingMock.length; i++) {
      if (ShoppingMock[i].qtd === 0) {
        ShoppingMock[i].qtd = 1;
      }
    }
    this.produtosComprados = ShoppingMock;
  }
}
