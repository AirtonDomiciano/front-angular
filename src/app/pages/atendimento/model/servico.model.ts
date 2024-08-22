import { TipoServicoInterface } from 'src/app/shared/interface/tipo-servico.interface';
import Produto from 'src/app/shared/model/produtos';
import Servicos from 'src/app/shared/model/servicos';

export default class ServicoModel extends Servicos {
  public produtos?: Produto[];
  public tipoServico?: TipoServicoInterface;
  constructor() {
    super();
    this.idServicos = 0;
    this.idAtendimento = 0;
    this.idClientes = 0;
    this.idAnimal = 0;
    this.idTipoServico = 0;
    this.status = 1;
    this.produtos = [];
    this.tipoServico = { idTipoServico: 0, nomeServico: '', valor: 0 };
  }
}
