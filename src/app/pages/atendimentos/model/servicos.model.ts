import Servicos from 'src/app/shared/model/servicos';

export default class ServicosModel extends Servicos {
  nomeClientes: string;
  nomeAnimal: string;
  especie: string;
  nomeServico: string;
  valorServico: number;
  constructor() {
    super();
    this.idServicos = 0;
    this.idAtendimento = 0;
    this.nomeClientes = '';
    this.nomeAnimal = '';
    this.especie = '';
    this.nomeServico = '';
    this.status = 0;
    this.valorServico = 0;
  }
}
