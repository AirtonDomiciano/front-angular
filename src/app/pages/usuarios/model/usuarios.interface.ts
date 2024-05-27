export interface UsuariosInterface {
  idUsuario?: number;
  nome: string;
  sobrenome: string;
  idade: number;
  email: string;
  senha: string;
  cep: string;
  funcao: string;
  removido: boolean;
  ativo?: boolean;
  apis: number[];
  localidade?: string;
  uf?: string;
  bairro?: string;
  logradouro?: string;
}
