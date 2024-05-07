export class UsuarioModel {
  idUsuario?: number;
  nome: string;
  sobrenome: string;
  idade: number;
  email: string;
  cep: string;
  funcao: string;
  removido: boolean;
  ativo?: boolean;
  apis: number[];
  localidade?: string;
  uf?: string;
  bairro?: string;
  logradouro?: string;

  constructor() {
    this.idade = 0;
    this.uf = '';
    this.cep = '';
    this.nome = '';
    this.email = '';
    this.funcao = '';
    this.sobrenome = '';
    this.localidade = '';
    this.bairro = '';
    this.logradouro = '';
    this.removido = false;
    this.ativo = true;
    this.apis = [];
  }
}
