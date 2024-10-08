import FormaPagamento from 'src/app/shared/interface/formas-pagamento.interface';

export const ListaFormasPagamento: FormaPagamento[] = [
  {
    idFormasDePagamento: 1,
    nome: 'Cartão de Crédito',
    icone: 'bi bi-credit-card',
  },
  {
    idFormasDePagamento: 2,
    nome: 'Cartão de Débito',
    icone: 'bi bi-credit-card-2-back',
  },
  {
    idFormasDePagamento: 3,
    nome: 'Dinheiro',
    icone: 'bi bi-cash-stack',
  },
  {
    idFormasDePagamento: 4,
    nome: 'Pix',
    icone: 'bi bi-x-diamond',
  },
];
