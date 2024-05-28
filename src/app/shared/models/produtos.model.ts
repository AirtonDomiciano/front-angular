export class ProdutosModel {
  idProdutos?: number;
  codigoProduto: number;
  nomeProduto: string;
  qtdeTotal: number;
  qtdeEntrada: number;
  qtdeSaida: number;
  valor: number;
  desconto: number;
  imagem: string;
  ativo: boolean;

  constructor() {
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
