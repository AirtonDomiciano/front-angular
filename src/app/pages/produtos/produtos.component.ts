import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from './model/produtos.model';
import { produtosMock } from './produtos.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public listagemProdutos: ProdutosModel[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listagemProdutos = produtosMock;
  }

  addProduto() {
    this.router.navigate([`private/produto`]);
  }

  editarProduto(id: number) {
    this.router.navigate([`private/produto/${id}`]);
  }

  excluirProduto(id: number) {
    let produtoExcluir = this.listagemProdutos.findIndex(
      (el) => el.idProdutos === id
    );

    if (produtoExcluir !== -1) {
      produtosMock.splice(produtoExcluir, 1);
    }
  }
}
