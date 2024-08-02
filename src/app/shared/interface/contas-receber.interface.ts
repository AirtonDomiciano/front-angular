export default interface ContasReceberInterface {
  idContasReceber?: number;
  idClientes?: number;
  idAtendimento?: number;
  pago: boolean;
  valor: number;
  valorPago?: number;
  dataPgto?: Date;
  juros?: number;
}
