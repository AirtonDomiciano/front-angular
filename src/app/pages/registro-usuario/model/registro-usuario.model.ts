export default class RegistroUsuarioModel {
  public nome: string;
  public sobrenome: string;
  public email: string;
  public senha: string;

  constructor() {
    this.nome = '';
    this.sobrenome = '';
    this.email = '';
    this.senha = '';
  }
}
