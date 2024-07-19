export default class ContasReceber {
  idContasReceber?: number;
  idAtendimento!: number;
  idClientes!: number;
  valor!: number;
  valorPago!: number;
  dataPgto?: Date;
  juros?: number;
  pago!: boolean;
}
