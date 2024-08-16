import ContasReceber from 'src/app/shared/model/contas-receber';

export default class ContasReceberModel extends ContasReceber {
  constructor() {
    super();
    this.idAtendimento = 0;
    this.idClientes = 0;
    this.idContasReceber = 0;
    this.valor = 0;
    this.valorPago = 0;
    this.dataPgto = new Date();
    this.juros = 0;
    this.pago = false;
  }
}
