export default class Clientes {
  idClientes?: number;
  idCidades?: number;
  idUf?: number;
  nomeClientes: string;
  bairro: string;
  logradouro: string;
  cep: string;
  cpfCnpj: string;
  fone: string;
  email: string;
  dtaNascimento: Date;
  ativo!: boolean;

  constructor() {
    this.nomeClientes = '';
    this.bairro = '';
    this.cep = '';
    this.logradouro = '';
    this.cpfCnpj = '';
    this.fone = '';
    this.email = '';
    this.dtaNascimento = new Date('');
  }
}
