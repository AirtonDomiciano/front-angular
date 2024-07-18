import Api from 'src/app/shared/model/api';

export class ApisModel extends Api {
  constructor() {
    super();
    this.url = '';
    this.rapidApiHost = '';
    this.nome = '';
  }
}
