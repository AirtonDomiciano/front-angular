import { Component, OnInit } from '@angular/core';
import { ProductsCarrinhoInterface } from '../carrinho/carrinho.interface';
import { ShoppingMock } from './shopping.mock';
import { ShoppingInterface } from './shopping-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss'],
})
export class ShoppingComponent implements OnInit {
  public produtosComprados: ShoppingInterface[] = [];
  public idCompra = 1;
  public temProdutos: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.produtosComprados = ShoppingMock;
    this.gerarId();
    this.temProduto();
  }

  verDetalhes(id: number) {
    this.router.navigate([`view-order/${id}`]);
  }

  gerarId() {
    for (var i = 0; i < this.produtosComprados.length; i++) {
      this.produtosComprados[i].id = this.idCompra;
      this.idCompra++;
    }
  }

  temProduto() {
    if (this.produtosComprados.length === 0) {
      this.temProdutos = false;
    } else {
      this.temProdutos = true;
    }
  }
}
