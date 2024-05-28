import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from 'src/app/shared/models/produtos.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public novoProduto: ProdutosModel[] = [];
  // public length: number = produtosMock.length;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.produtosRecentes();
  }

  produtosRecentes() {
    // this.novoProduto = produtosMock.slice(this.length - 5, this.length);
    this.novoProduto.reverse();
  }

  redirecionarParaCatalogo() {
    this.router.navigate([`private/catalogo`]);
  }
}
