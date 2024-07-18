import Produto from '../model/produtos';

export interface calcularValorAtendimento {
  produtos: Produto[];
  idTipoServico: number;
}
