import { Usuario } from 'src/app/shared/models/usuario';

export class UsuarioModel extends Usuario {
  constructor() {
    super();
    this.idUsuarios = 0;
    this.idade = 0;
    this.uf = '';
    this.cep = '';
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.funcao = '';
    this.sobrenome = '';
    this.localidade = '';
    this.bairro = '';
    this.logradouro = '';
    this.ativo = true;
    // this.apis = [];
  }
}
