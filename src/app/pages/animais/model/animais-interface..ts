import { Animais } from 'src/app/shared/models/animais';

export default class AnimaisModel extends Animais {
  constructor() {
    super();
    this.idAnimal = 0;
    this.idCliente = 0;
    this.nome = '';
    this.divisao = '';
    this.especie = '';
    this.raca = '';
    this.idade = 0;
  }
}
