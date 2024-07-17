export default interface ContasReceberInterface {
  idContasReceber?: number;
  idClientes?: number;
  idAtendimento?: number;
  idFormasDePagamento?: number;
  pago: boolean;
  valor: number;
  valorPago?: number;
  qtdParcelas?: number;
  dataPgto?: Date;
  dataVcto: Date;
  juros?: number;
}
