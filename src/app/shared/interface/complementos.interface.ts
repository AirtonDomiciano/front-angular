import FormaPagamento from './formas-pagamento.interface';

export default interface ComplementosInterface {
  idAtendimento?: number;
  valorRestante: number;
  formaPagamento?: FormaPagamento;
  pagamento?: boolean;
  recebimento?: boolean;
}
