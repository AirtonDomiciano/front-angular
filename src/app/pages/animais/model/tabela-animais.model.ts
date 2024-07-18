import Animais from 'src/app/shared/model/animais';

export default class TabelaAnimais extends Animais {
  nomeClientes: string;
  constructor() {
    super();
    this.idAnimal = 0;
    this.nomeClientes = '';
    this.nome = '';
    this.divisao = '';
    this.especie = '';
    this.raca = '';
  }
}
