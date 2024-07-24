import Atendimento from 'src/app/shared/model/atendimento';

export class AtendimentoModel extends Atendimento {
  constructor() {
    super();
    this.hora = new Date();
    this.data = new Date();
    this.descricao = '';
  }
}
