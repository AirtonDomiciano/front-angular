export class ApisModel {
  id?: number;
  nome: string;
  url: string;
  rapidApiHost: string;
  ativo: boolean;

  constructor() {
    (this.url = ''),
      (this.rapidApiHost = ''),
      (this.nome = ''),
      (this.ativo = true);
  }
}
