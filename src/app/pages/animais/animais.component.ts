import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimaisService } from 'src/app/services/animais.service';
import { AnimaisInterface } from './model/animais.interface';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class AnimaisComponent implements OnInit {
  public listarAnimais: AnimaisInterface[] = [];

  constructor(private router: Router, private animaisService: AnimaisService) {}

  async ngOnInit(): Promise<void> {
    await this.pegarDadosTabelaAnimais();
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

  async pegarDadosTabelaAnimais(): Promise<void> {
    const input = await this.animaisService.colocarNomeClienteNaTabela();
    this.listarAnimais = input;
  }
}
