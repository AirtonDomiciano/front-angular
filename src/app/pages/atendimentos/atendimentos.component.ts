import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ServicosService } from 'src/app/services/servicos.service';
import { Router } from '@angular/router';
import { ServicosDto } from 'src/app/shared/dtos/servicos.dto';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.scss'],
})
export class AtendimentosComponent implements OnInit {
  constructor(
    private atendimentoService: AtendimentoService,
    private servicosService: ServicosService,
    private router: Router
  ) {}

  public lista: ServicosDto[] = [];

  async ngOnInit(): Promise<void> {
    await this.inicializarListaAtendimentos();
  }

  async inicializarListaAtendimentos() {
    this.lista = await this.servicosService.listandoServicosClientesAnimais();
  }

  adicionarAtendimento() {
    this.router.navigate([`private/atendimento`]);
  }

  inicializarBadges(servico: ServicosDto) {
    let nomeBadge = '';
    let classeBadge = '';
    switch (servico.status) {
      case 0:
        classeBadge = 'badge-danger';
        nomeBadge = 'Cancelado';
        break;
      case 1:
        classeBadge = 'badge-warning';
        nomeBadge = 'Em espera';
        break;
      case 2:
        classeBadge = 'badge-primary';
        nomeBadge = 'Em andamento';
        break;
      case 3:
        classeBadge = 'badge-success';
        nomeBadge = 'Concluído';
        break;
    }
    return { classeBadge, nomeBadge };
  }

  editarAtendimento(id: number) {
    this.router.navigate([`private/atendimento/${id}`]);
  }

  async deletarAtendimento(id: number): Promise<void> {
    const res = await this.servicosService.deletarServico(id);

    if (res) {
      this.inicializarListaAtendimentos();
    }
  }
}
