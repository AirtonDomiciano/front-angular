import FormaPagamento from './formas-pagamento.interface';

export default interface SalvarPagamentoInterface {
  valor: number;
  formaPagamento: FormaPagamento;
}
