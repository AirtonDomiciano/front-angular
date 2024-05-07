import { ProductsCarrinhoInterface } from '../../carrinho/carrinho.interface';

export interface ComprasInterface {
  id?: number;
  preco: number;
  produtos: ProductsCarrinhoInterface[];
}
