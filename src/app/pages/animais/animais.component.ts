import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimaisService } from 'src/app/services/animais.service';
import { ClientesService } from 'src/app/services/clientes.service';
import { Animais } from 'src/app/shared/models/animais';
import { AnimaisInterface } from './model/animais.interface';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class AnimaisComponent implements OnInit {
  public listaAnimais: Animais[] = [];
  public formAnimais: FormGroup = new FormGroup({});
  public listarAnimais: AnimaisInterface[] = [];

  constructor(
    private router: Router,
    private animaisService: AnimaisService,
    private clientesService: ClientesService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.buscarAnimais();
    await this.buscarNomeClientePorId();
  }

  async buscarAnimais() {
    const animais = await this.animaisService.buscarTodosAnimais();

    if (!animais) {
      alert('Ops... Algo deu errado');
      return;
    }

    this.listaAnimais = animais;
  }

  adicionarAnimal() {
    this.router.navigate([`/private/animal`]);
  }

  excluirAnimal(id: number) {
    this.animaisService.deletarAnimal(id);
    window.location.reload();
  }

  editarAnimal(id: number) {
    this.router.navigate([`/private/animal/${id}`]);
  }

  async buscarNomeClientePorId(): Promise<void> {
    for (let el of this.listaAnimais) {
      let res = await this.clientesService.buscarClientePorId(el.idClientes);
      const input: AnimaisInterface = {
        idAnimal: el.idAnimal,
        nomeClientes: res.nomeClientes,
        nome: el.nome,
        divisao: el.divisao,
        especie: el.especie,
        raca: el.raca,
      };
      this.listarAnimais.push(input);
    }
  }
}
