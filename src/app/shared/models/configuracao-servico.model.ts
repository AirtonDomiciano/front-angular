import { TipoServicoInterface } from '../interface/tipo-servico.interface';
import { Produto } from './produtos.model';

export default class ConfiguracoesServico {
  tipoServico!: TipoServicoInterface;
  produtos!: Produto[];
}
