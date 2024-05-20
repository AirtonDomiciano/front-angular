export default class EntidadesInterface {
  idEntidades: number;
  nomeEntidade: string;
  pessoa: boolean;
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
    this.idEntidades = 0;
    this.nomeEntidade = '';
    this.pessoa = false;
    this.endereco = '';
    this.bairro = '';
    this.cep = '';
    this.cpfCnpj = '';
    this.ierg = '';
    this.fone = '';
    this.email = '';
    this.dtaNascimento = new Date('');
    this.limite = 0;
    this.listaNegra = false;
    this.ativo = true;
  }
}
