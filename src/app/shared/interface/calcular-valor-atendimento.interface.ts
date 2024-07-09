import { Produto } from '../models/produtos.model';
import { TipoServicoInterface } from './tipo-servico.interface';

export interface calcularValorAtendimento {
  produtos: Produto[];
  idTipoServico: number;
  //   tipoServico: TipoServicoInterface;
}
