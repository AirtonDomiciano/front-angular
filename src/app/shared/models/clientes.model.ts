export default class ClientesModel {
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
  listaNegra: boolean;
  ativo: boolean;

  constructor() {
    this.nomeClientes = '';
    this.bairro = '';
    this.cep = '';
    this.logradouro = '';
    this.cpfCnpj = '';
    this.fone = '';
    this.email = '';
    this.dtaNascimento = new Date('');
    this.listaNegra = false;
    this.ativo = true;
  }
}
