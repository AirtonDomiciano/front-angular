export class UserModel {
  id?: number;
  nome: string;
  sobrenome: string;
  idade: number;
  email: string;
  cep: string;
  funcao: string;

  constructor() {
    this.nome = ''
    this.sobrenome = ''
    this.idade = 0
    this.email = ''
    this.cep = ''
    this.funcao = ''
  }
}