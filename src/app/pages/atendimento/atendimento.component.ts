import { Component, OnInit } from '@angular/core';
// import { ProdutosModel } from '../produtos/model/produtos.model';
// import { produtosCarrinhoMock } from '../carrinho/carrinho.mock';
// import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class AtendimentoComponent implements OnInit {
  // public produtos!: ProdutosModel[];

  constructor() {}

  async ngOnInit(): Promise<void> {
    // this.produtos = await this.produtosService.BuscarTodosProdutos();
  }

  // adicionarProdutoNoCarrinho(id: number) {
  //   const index = this.produtos.findIndex((el) => el.idProdutos === id);
  //   if (!produtosCarrinhoMock.includes(this.produtos[index])) {
  //     produtosCarrinhoMock.push(this.produtos[index]);
  //   }
  // }
}
