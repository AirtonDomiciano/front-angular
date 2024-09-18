import Usuario from 'src/app/shared/model/usuario';

export class UsuariosModel extends Usuario {
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
