import Parcelas from 'src/app/shared/models/parcelas';

export default class ParcelasModel extends Parcelas {
  constructor() {
    super();
    this.idParcelas = 0;
    this.idContasReceber = 0;
    this.idFormasPagamento = 0;
    this.valorParcela = 0;
    this.dataPgto = new Date();
  }
}
