import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from './model/produtos.model';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  public listagemProdutos: ProdutosModel[] = [];
  public mostrarAtivos = true;

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    private toast: ToastMessageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.filtrar();
  }

  async filtrar(): Promise<void> {
    const res = await this.produtosService.BuscarTodosProdutos();
    this.listagemProdutos = res.filter((el) => el.ativo === this.mostrarAtivos);
    this.mostrarAtivos = !this.mostrarAtivos;
  }

  adicionarProduto() {
    this.router.navigate([`private/produto`]);
  }

  editarProduto(id: number) {
    this.router.navigate([`private/produto/${id}`]);
  }

  async excluirProduto(produto: ProdutosModel): Promise<void> {
    if (!produto.idProdutos) {
      return;
    }
    if (produto.ativo) {
      this.toast.mostrarErro('Não pode remover um produto ativo.');
      return;
    } else {
      await this.produtosService.deletarProduto(produto.idProdutos);
      this.toast.mostrarSucesso('Produto deletado com sucesso');
    }
  }
}
