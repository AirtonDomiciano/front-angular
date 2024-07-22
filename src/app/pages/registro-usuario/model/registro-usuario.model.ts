import RegistroUsuario from './registro-usuario';

export default class RegistroUsuarioModel extends RegistroUsuario {
  constructor() {
    super();
    this.nome = '';
    this.sobrenome = '';
    this.email = '';
    this.senha = '';
    this.confirmarSenha = '';
  }
}
