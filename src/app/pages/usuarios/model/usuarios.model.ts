import Usuarios from '../../../shared/interface/usuarios.interface';
export class UsuariosModel extends Usuarios {
  constructor() {
    super();
    this.idade = 0;
    this.cep = '';
    this.nome = '';
    this.email = '';
    this.funcao = '';
    this.sobrenome = '';
    this.ativo = true;
  }
}
