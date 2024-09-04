import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimaisService } from 'src/app/services/animais.service';
import TabelaAnimais from './model/tabela-animais.model';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import AnimaisModel from './model/animais.model';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class AnimaisComponent implements OnInit {
  public listarAnimais: TabelaAnimais[] = [];
  public mostrarAtivos = true;

  constructor(
    private router: Router,
    private animaisService: AnimaisService,
    private toast: ToastMessageService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.filtrar();
  }

  adicionar() {
    this.router.navigate([`/private/animal`]);
  }

  async excluir(animal: AnimaisModel): Promise<void> {
    if (!animal.idAnimal) {
      return;
    }
    if (animal.ativo) {
      this.toast.mostrarErro('Não foi possivel remover, pois está ativo.');
    } else {
      await this.animaisService.deletar(animal.idAnimal);
      this.toast.mostrarSucesso('Removido com sucesso');
    }
  }

  editar(id: number) {
    this.router.navigate([`/private/animal/${id}`]);
  }

  async filtrar(): Promise<void> {
    const res = await this.animaisService.buscarTodos();
    if (!res) {
      alert('Deu erro.');
      return;
    }
    this.listarAnimais = res.filter((el) => el.ativo === this.mostrarAtivos);
    this.mostrarAtivos = !this.mostrarAtivos;
  }
}
