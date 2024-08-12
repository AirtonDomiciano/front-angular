import FormaPagamento from './formas-pagamento.interface';

export default interface SalvarComplementoInterface {
  valor: number;
  formaPagamento: FormaPagamento;
}
