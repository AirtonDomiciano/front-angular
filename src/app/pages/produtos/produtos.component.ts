import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from './model/produtos.model';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public listagemProdutos: ProdutosModel[] = [];
  public ativos: boolean = false;

  constructor(
    private router: Router,
    private produtosService: ProdutosService
  ) {}

  async ngOnInit(): Promise<void> {
    this.buscarProdutos(this.ativos);
  }

  async buscarProdutos(ativo: boolean) {
    const res = await this.produtosService.buscarAtivosInativos(ativo);

    if (!res) {
      alert('Deu ruim!');
      return;
    }

    this.listagemProdutos = res;
  }

  adicionarProduto() {
    this.router.navigate([`private/produto`]);
  }

  editarProduto(id: number) {
    this.router.navigate([`private/produto/${id}`]);
  }

  async excluirProduto(id: number) {
    const res = await this.produtosService.DeletarProduto(id);

    if (!res) {
      alert('Deu ruim!');
      return;
    }

    await this.buscarProdutos(this.ativos);
  }
}
