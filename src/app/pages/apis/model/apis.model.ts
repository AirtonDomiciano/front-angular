export class ApisModel {
  idApis?: number;
  nome: string;
  url: string;
  rapidApiHost: string;

  constructor() {
    (this.url = ''), (this.rapidApiHost = ''), (this.nome = '');
  }
}
