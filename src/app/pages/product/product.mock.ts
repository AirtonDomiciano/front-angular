import { productsModel } from "./product.model";

export const produtosMock: productsModel[] = [
    { id: 1, nome: 'Computador', categoria: 'eletrônicos', preco: 2499.99, descricao: 'da pra jogar'},    
    { id: 2, nome: 'Celular', categoria: 'eletrônicos', preco: 3000.00, descricao: 'é de mexer'},    
    { id: 3, nome: 'Nintendo Switch', categoria: 'eletrônicos', preco: 2999.00, descricao: 'é de jogar'},    
    { id: 4, nome: 'Geladeira', categoria: 'eletrodoméstico', preco: 2999.99, descricao: 'A melhor do mercado para armazenar o seu produto'},    
    { id: 5, nome: 'Fogão', categoria: 'eletrodoméstico', preco: 2499.99, descricao: 'Tecnologia de  ultima geração com touch e anti óleo'},    
    { id: 6, nome: 'Coxinha', categoria: 'comida', preco: 8.00, descricao: 'vem com catupiri'},    
    { id: 7, nome: 'Antártica', categoria: 'bebida', preco: 9.00, descricao: 'tem maispersonalidade que coca-cola'},    
  ];
