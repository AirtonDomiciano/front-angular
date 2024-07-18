import ConfiguracoesServico from 'src/app/shared/model/configuracao-servico';

export class ConfiguracaoServicoModel extends ConfiguracoesServico {
  constructor() {
    super();
    this.tipoServico = { idTipoServico: 0, nomeServico: '', valor: 0 };
    this.produtos = [];
  }
}
