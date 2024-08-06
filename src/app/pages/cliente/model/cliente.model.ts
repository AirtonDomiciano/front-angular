import Clientes from 'src/app/shared/model/clientes';

export class ClienteModel extends Clientes {
  constructor() {
    super();
    this.idCidades = 0;
    this.idUf = 0;
    this.ativo = true;
    this.listaNegra = false;
  }
}
