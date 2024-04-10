import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { produtosMock } from '../product/product.mock';
import { ProductsModel } from '../product/product.model';
import { produtosCarrinhoMock } from '../carrinho/carrinho.mock';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  public produtos: ProductsModel[] = [];

  ngOnInit(): void {
    this.produtos = produtosMock;
  }

  adicionarProdutoNoCarrinho(id: number) {
    const index = this.produtos.findIndex((el) => el.id === id);
    produtosCarrinhoMock.push(this.produtos[index]);
  }
}
