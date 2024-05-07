export class ProdutosModel {
  idProdutos?: number;
  nome: string;
  categoria: string;
  preco: number;
  descricao: string;
  imagem: string;

  constructor() {
    this.nome = '';
    this.categoria = '';
    this.preco = 0;
    this.descricao = '';
    this.imagem = '';
  }
}
