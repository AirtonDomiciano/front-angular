export class UsuariosModel {
  idUsuario?: number;
  nome: any;
  sobrenome: any;
  idade: any;
  email: any;
  cep: any;
  funcao: any;
  ativo: boolean;

  constructor() {
    this.idade = 0;
    this.cep = '';
    this.nome = '';
    this.email = '';
    this.funcao = '';
    this.sobrenome = '';
    this.ativo = true;
  }
}
