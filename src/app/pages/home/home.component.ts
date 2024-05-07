import { Component, Input, OnInit } from '@angular/core';
import { ProdutosModel } from '../produtos/model/produtos.model';
import { produtosMock } from '../produtos/produtos.mock';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public novoProduto: ProdutosModel[] = [];
  public length: number = produtosMock.length;

  ngOnInit(): void {
    this.produtosRecentes();
  }

  produtosRecentes() {
    this.novoProduto = produtosMock.slice(this.length - 5, this.length);
    this.novoProduto.reverse();
  }
}
