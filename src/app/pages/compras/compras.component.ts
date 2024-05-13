import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ComprasInterface } from './models/compras-interface';
import { ComprasMock } from './models/compras.mock';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.scss'],
})
export class ComprasComponent implements OnInit {
  public produtosComprados: ComprasInterface[] = [];
  public idCompra = 1;
  public temProdutos: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.produtosComprados = ComprasMock;
    this.gerarId();
    this.temProduto();
  }

  verDetalhes(id: number) {
    this.router.navigate([`private/pedidos/${id}`]);
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

  redirecionarParaCatalogo() {
    this.router.navigate([`private/catalogo`]);
  }
}
