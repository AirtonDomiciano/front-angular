import { Component, OnInit } from '@angular/core';
import { productsModel } from './product.model';
import { produtosMock } from './product.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  public listagemProdutos: productsModel[] = [];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.listagemProdutos = produtosMock;
  }

  editarProduto(id: number) {
    this.router.navigate([`edit-product/${id}`]);
    console.log(id)
  }

  excluirProduto(id: number) {
    let produtoExcluir = this.listagemProdutos.findIndex((el) => el.id === id);

    if (produtoExcluir !== -1) {
      produtosMock.splice(produtoExcluir, 1);
    }
  }
}
