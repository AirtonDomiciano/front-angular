import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from './model/produtos.model';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { ManipulaCampoAtivoService } from 'src/app/services/ativo.service';

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
    private toast: ToastMessageService,
    private manipulaCampoAtivoService: ManipulaCampoAtivoService
  ) {}

  async ngOnInit(): Promise<void> {
    this.mostrarAtivos =
      this.manipulaCampoAtivoService.MostrarValorAtivoAtual();
    await this.filtrar();
  }

  async filtrar(): Promise<void> {
    const res = await this.produtosService.buscarAtivosInativos(
      this.mostrarAtivos
    );
    this.mostrarAtivos = !this.mostrarAtivos;
    this.manipulaCampoAtivoService.atualizarValorAtivo(this.mostrarAtivos);

    if (res) {
      this.listagemProdutos = res;
    } else {
      this.toast.mostrarErro('Ação sem resposta...');
    }
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
    }
    const res = await this.produtosService.deletarProduto(produto.idProdutos);
    if (res) {
      this.toast.mostrarSucesso('Produto deletado com sucesso');
    } else {
      this.toast.mostrarErro('Ops... Ação sem resposta.');
    }
  }
}
