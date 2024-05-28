export default interface ClientesInterface {
  idClientes?: number;
  nomeClientes: string;
  endereco: string;
  bairro: string;
  cep: string;
  cpfCnpj: string;
  ierg: string;
  fone: string;
  email: string;
  dtaNascimento: Date;
  limite: number;
  listaNegra: boolean;
  ativo: boolean;
}
