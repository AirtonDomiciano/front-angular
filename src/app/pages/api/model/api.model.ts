import Api from 'src/app/shared/model/api';

export class ApiModel extends Api {
  constructor() {
    super();
    this.idApis = 0;
    this.url = '';
    this.rapidApiHost = '';
    this.nome = '';
  }
}
