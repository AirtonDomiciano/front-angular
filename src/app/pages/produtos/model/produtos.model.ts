import { Produto } from 'src/app/shared/models/produtos.model';

export class ProdutosModel extends Produto {
  constructor() {
    super();
    this.idProdutos = 0;
    this.codigoProduto = 0;
    this.nomeProduto = '';
    this.qtdeTotal = 0;
    this.qtdeEntrada = 0;
    this.qtdeSaida = 0;
    this.valor = 0;
    this.desconto = 0;
    this.imagem = '';
    this.ativo = true;
  }
}
