export default class ClientesModel {
  idClientes: number;
  nomeClientes: string;
  endereco: string;
  bairro: string;
  cep: string;
  cpfCnpj: string;
  ierg: string;
  fone: string;
  email: string;
  dtaNascimento: Date;
  limite: number;
  listaNegra: boolean;
  ativo: boolean;

  constructor() {
    this.idClientes = 0;
    this.nomeClientes = '';
    this.endereco = '';
    this.bairro = '';
    this.cep = '';
    this.cpfCnpj = '';
    this.ierg = '';
    this.fone = '';
    this.email = '';
    this.dtaNascimento = new Date();
    this.limite = 0;
    this.listaNegra = false;
    this.ativo = true;
  }
}
