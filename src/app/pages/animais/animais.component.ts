import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimaisService } from 'src/app/services/animais.service';
import TabelaAnimais from './model/tabela-animais.model';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class AnimaisComponent implements OnInit {
  public listarAnimais: TabelaAnimais[] = [];

  constructor(private router: Router, private animaisService: AnimaisService) {}

  async ngOnInit(): Promise<void> {
    await this.buscarAnimais(true);
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

  async buscarAnimais(ativo: boolean) {
    this.listarAnimais = await this.animaisService.buscarAtivosInativos(ativo);
  }
}
