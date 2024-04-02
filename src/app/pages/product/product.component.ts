import { Component, OnInit } from '@angular/core';
import { products } from './product.interface';
import { produtosMock } from './product.mock';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  public listagemProdutos: products[] = [];

  ngOnInit(): void {
    this.listagemProdutos = produtosMock;
  }
}