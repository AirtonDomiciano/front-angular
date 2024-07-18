import ProdutosDoServico from 'src/app/shared/model/produtos-do-servico';

export default class ProdutosDoServicoModel extends ProdutosDoServico {
  constructor() {
    super();
    this.idProdutosServico = 0;
    this.idServicos = 0;
    this.idProdutos = 0;
  }
}
