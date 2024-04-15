import { ProductsCarrinhoInterface } from '../carrinho/carrinho.interface';

export interface ShoppingInterface {
  id?: number;
  preco: number;
  produtos: ProductsCarrinhoInterface[];
}
