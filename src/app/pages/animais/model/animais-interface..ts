export default class AnimaisInterface {
  idAnimal: number;
  idCliente: string;
  nomeAnimal: string;
  divisaoAnimal: string;
  especieAnimal: string;
  racaAnimal: string;
  idadeAnimal: number;

  constructor() {
    this.idAnimal = 0;
    this.idCliente = '';
    this.nomeAnimal = '';
    this.especieAnimal = '';
    this.racaAnimal = '';
    this.idadeAnimal = 0;
    this.divisaoAnimal = '';
  }
}
