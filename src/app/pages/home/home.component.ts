import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from '../produtos/model/produtos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public novoProduto: ProdutosModel[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.produtosRecentes();
  }

  produtosRecentes() {
    this.novoProduto.reverse();
  }

  redirecionarParaCatalogo() {
    this.router.navigate([`private/catalogo`]);
  }
}
