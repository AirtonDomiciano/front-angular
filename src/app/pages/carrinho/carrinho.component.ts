import { Component, OnInit } from '@angular/core';
import { produtosCarrinhoMock } from './carrinho.mock';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductsCarrinhoInterface } from './carrinho.interface';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.scss'],
})
export class CarrinhoComponent implements OnInit {
  public produtosCarrinho: ProductsCarrinhoInterface[] = [];
  public precoTotal: number = 0;
  public qtdFormGroup: UntypedFormGroup;
  public lastQtd: number = 0;
  public lastId: number = 0;
  public contQtdIsFull: number = 0;

  constructor(fb: FormBuilder) {
    this.qtdFormGroup = fb.group({
      qtd: [1, Validators.required],
    });
  }

  ngOnInit(): void {
    this.produtosCarrinho = produtosCarrinhoMock;
    this.calcularPrecoInicial();
    this.lastQtd = 0;
    this.lastId = 0;
    this.contQtdIsFull = 0;
    this.zerarQtds();
  }

  removerProdutoCarrinho(id: number) {
    this.calcularRemocaoProduto(id);
    const index = this.produtosCarrinho.findIndex((el) => el.id === id);
    produtosCarrinhoMock.splice(index, 1);
  }

  calcularPrecoInicial() {
    let precoTotal = 0;

    for (let produto of this.produtosCarrinho) {
      precoTotal += produto.preco;
    }

    this.precoTotal = precoTotal;
  }

  calcularPrecoQtd(id?: number) {
    const index = this.produtosCarrinho.findIndex((el) => el.id === id);
    let precoTotal = this.precoTotal;
    let qtd = this.qtdFormGroup.get('qtd')?.value;
    if (
      isNaN(this.produtosCarrinho[index].qtd!) ||
      this.produtosCarrinho[index].qtd! === 0
    ) {
      this.contQtdIsFull = 0;
    }

    if (this.contQtdIsFull == 1) {
      this.lastQtd = this.produtosCarrinho[index].qtd!;
    } else {
      this.contQtdIsFull = 1;
      this.lastQtd = 1;
    }
    precoTotal -= this.produtosCarrinho[index].preco * this.lastQtd;
    precoTotal += this.produtosCarrinho[index].preco * qtd;
    this.produtosCarrinho[index].qtd = qtd;
    this.lastId = id!;

    this.precoTotal = precoTotal;
  }

  zerarQtds() {
    for (let produto of this.produtosCarrinho) {
      produto.qtd = 0;
    }
  }

  calcularRemocaoProduto(id: number) {
    const index = this.produtosCarrinho.findIndex((el) => el.id === id);
    if (this.produtosCarrinho[index].qtd! < 1) {
      this.produtosCarrinho[index].qtd! = 1;
    }
    let valorProduto =
      this.produtosCarrinho[index].preco * this.produtosCarrinho[index].qtd!;

    this.precoTotal -= valorProduto;
  }
}
