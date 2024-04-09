export class ProductsModel {
  id?: number;
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
