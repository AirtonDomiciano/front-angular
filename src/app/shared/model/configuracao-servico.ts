import { TipoServicoInterface } from '../interface/tipo-servico.interface';
import Produto from './produtos';

export default class ConfiguracoesServico {
  tipoServico!: TipoServicoInterface;
  produtos!: Produto[];
}
