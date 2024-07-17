export interface ContasReceber {
  idContasReceber?: number;
  idAtendimento: number;
  nomeClientes: string;
  pago: boolean;
  valor: number;
  valorPago: number;
  dataVcto: Date;
  dataPgto: Date;
  nomeFormaPagamento: string;
}
