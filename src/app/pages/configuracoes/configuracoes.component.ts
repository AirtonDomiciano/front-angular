import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.scss'],
})
export class ConfiguracoesComponent {
  constructor(private messageService: MessageService) {}

  mostrarToast(event: boolean) {
    if (event) {
      this.messageService.add({
        severity: 'success',
        summary: 'Sucesso!',
        detail: 'Configuração Salva com Sucesso!',
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Erro!',
        detail: 'Erro ao Salvar Configuração!',
      });
    }
  }
}
