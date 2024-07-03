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
    await this.pegarDadosTabela();
  }

  adicionar() {
    this.router.navigate([`/private/animal`]);
  }

  excluir(id: number) {
    this.animaisService.deletar(id);
  }

  editar(id: number) {
    this.router.navigate([`/private/animal/${id}`]);
  }

  async pegarDadosTabela(): Promise<void> {
    const input = await this.animaisService.buscarTodos();
    this.listarAnimais = input;
  }
}
