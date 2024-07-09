import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/shared/models/produtos.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public produtosSemEstoque: Produto[] = [];
  constructor(
    private router: Router,
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.buscarProdutosSemEstoque();
  }

  async buscarProdutosSemEstoque(): Promise<void> {
    const produtos = await this.produtosService.BuscarTodosProdutos();
    this.produtosSemEstoque = produtos.filter((el) => el.qtdeTotal === 0);
  }

  redirecionarParaCatalogo() {
    this.router.navigate([`private/catalogo`]);
  }
}
