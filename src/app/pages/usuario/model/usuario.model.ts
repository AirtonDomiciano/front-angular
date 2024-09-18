import Usuario from 'src/app/shared/model/usuario';

export class UsuarioModel extends Usuario {
  constructor() {
    super();
    this.idade = 0;
    this.uf = '';
    this.cep = '';
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.confirmarSenha = '';
    this.funcao = '';
    this.sobrenome = '';
    this.localidade = '';
    this.bairro = '';
    this.logradouro = '';
    this.ativo = true;
  }
}
