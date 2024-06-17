import { ServicosAnimalInterface } from 'src/app/shared/interface/servicos-animal.interface';
import { Produto } from 'src/app/shared/models/produtos.model';
import { Servicos } from 'src/app/shared/models/servicos.model';

export class ServicoModel extends Servicos {
  public produtos?: Produto[];
  public servicoAnimal: ServicosAnimalInterface;
  constructor() {
    super();
    this.idClientes = 0;
    this.idAnimal = 0;
    this.idServicosAnimal = 0;
    this.idProdutos = 0;
    this.produtos = [];
    this.status = 1;
    this.valorServico = 0;
    this.servicoAnimal = { idServicosAnimal: 0, nomeServico: '', valor: 0 };
  }
}
