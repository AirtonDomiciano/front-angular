import ClientesModel from 'src/app/shared/model/clientes';

export class ClienteModel extends ClientesModel {
  public localidade: string;
  public uf: string;
  constructor() {
    super();
    this.idCidades = 0;
    this.idUf = 0;
    this.ativo = true;
    this.listaNegra = false;
    this.localidade = '';
    this.uf = '';
  }
}
