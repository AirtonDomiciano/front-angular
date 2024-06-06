import { Atendimento } from 'src/app/shared/models/atendimento';

export class AtendimentoModel extends Atendimento {
  constructor() {
    super();
    this.idClientes = 0;
    this.idAnimais = 0;
    this.idServicos = 0;
  }
}
