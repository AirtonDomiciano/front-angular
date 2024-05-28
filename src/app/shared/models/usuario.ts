export class Usuario {
  idUsuarios?: number;
  nome!: string;
  sobrenome!: string;
  idade!: number;
  email!: string;
  senha!: string;
  cep!: string;
  funcao!: string;
  ativo?: boolean;
  apis!: number[];
  localidade?: string;
  uf?: string;
  bairro?: string;
  logradouro?: string;
}
