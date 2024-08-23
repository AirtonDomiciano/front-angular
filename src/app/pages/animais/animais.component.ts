import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimaisService } from 'src/app/services/animais.service';
import TabelaAnimais from './model/tabela-animais.model';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss'],
})
export class AnimaisComponent implements OnInit {
  public listarAnimais: TabelaAnimais[] = [];
  public mostrarAtivos!: boolean;

  constructor(
    private router: Router,
    private animaisService: AnimaisService,
    private toast: ToastMessageService
  ) {}

  async ngOnInit(): Promise<void> {
    await this.buscarAnimais(true);
  }

  adicionar() {
    this.router.navigate([`/private/animal`]);
  }

  async excluir(id: number): Promise<void> {
    const res = await this.animaisService.deletar(id);

    if (res) {
      this.toast.mostrarSucesso('Excluído com sucesso!');
    } else {
      this.toast.mostrarErro(
        'O Animal não pode ser excluido. Já  foi feito atendimento nesse fidido.'
      );
    }
  }

  editar(id: number) {
    this.router.navigate([`/private/animal/${id}`]);
  }

  async pegarDadosTabela(): Promise<void> {
    const res = await this.animaisService.buscarTodos();
    if (res) {
      const input = res.filter((el) => el.ativo === true);
      this.listarAnimais = input;
    }
  }

  async filtrar(): Promise<void> {
    const res = await this.animaisService.buscarTodos();
    if (res) {
      if (this.mostrarAtivos) {
        this.listarAnimais = res.filter((el) => el.ativo === true);
      } else {
        this.listarAnimais = res.filter((el) => el.ativo === false);
      }
      this.mostrarAtivos = !this.mostrarAtivos;
    }
  }
}
