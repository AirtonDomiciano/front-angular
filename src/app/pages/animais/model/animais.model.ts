import { Animais } from 'src/app/shared/models/animais';

export default class AnimaisModel extends Animais {
  constructor() {
    super();
    this.idClientes = 0;
    this.nome = '';
    this.divisao = '';
    this.especie = '';
    this.raca = '';
  }
}
