import ConfiguracoesServico from 'src/app/shared/models/configuracao-servico.model';

export class ConfiguracaoServicoModel extends ConfiguracoesServico {
  constructor() {
    super();
    this.tipoServico = { idTipoServico: 0, nomeServico: '', valor: 0 };
    this.produtos = [];
  }
}
