import HorarioServico from 'src/app/shared/model/horario-servico';

export default class HorarioServicoModel extends HorarioServico {
  constructor() {
    super();
    this.idHorario = 0;
    this.idServicos = 0;
    this.horarioInicio = new Date();
    this.horarioTermino = new Date();
  }
}
