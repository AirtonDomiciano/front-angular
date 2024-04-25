export class UserModel {
  id?: number;
  nome: string;
  sobrenome: string;
  idade: number;
  email: string;
  cep: string;
  funcao: string;
  removido: boolean;
  ativo?: boolean;
  apis: number[];

  constructor() {
    this.nome = '';
    this.sobrenome = '';
    this.idade = 0;
    this.email = '';
    this.cep = '';
    this.funcao = '';
    this.removido = false;
    this.ativo = true;
    this.apis = [];
  }
}
