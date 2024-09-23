import ProdutosServico from 'src/app/shared/model/produtos-servico';

export default class ProdutosServicoModel extends ProdutosServico {
  constructor() {
    super();
    this.idProdutosServico = 0;
    this.idTipoServico = 0;
    this.idProdutos = '';
  }
}
