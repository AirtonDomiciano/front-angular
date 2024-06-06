import ClientesModel from 'src/app/shared/models/clientes.model';

export class ClienteModel extends ClientesModel {
  constructor() {
    super();
    this.idCidades = 0;
    this.idUf = 0;
    this.ativo = true;
    this.listaNegra = false;
  }
}
