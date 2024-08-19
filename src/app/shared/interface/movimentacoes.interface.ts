export default interface MovimentacoesInterface {
  idMovLctos?: number;
  idContasReceber?: number;
  idContasPagar?: number;
  idFormasDePagamento: number;
  valorPago: number;
  pagamento: boolean;
  recebimento: boolean;
  data: Date;
}
