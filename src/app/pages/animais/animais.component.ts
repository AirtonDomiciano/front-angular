import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimaisService } from 'src/app/services/animais.service';
import { Animais } from 'src/app/shared/models/animais';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class AnimaisComponent implements OnInit {
  public listarAnimais: Animais[] = [];
  public formAnimais: FormGroup = new FormGroup({});

  constructor(private router: Router, public animaisService: AnimaisService) {}

  async ngOnInit(): Promise<void> {
    this.buscarAnimais();
  }

  async buscarAnimais() {
    const animais = await this.animaisService.buscarTodosAnimais();

    if (!animais) {
      alert('Ops... Algo deu errado');
      return;
    }

    this.listarAnimais = animais;
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
}
