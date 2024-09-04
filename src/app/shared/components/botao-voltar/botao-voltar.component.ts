import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastMessageService } from '../../services/toast-message.service';

@Component({
  selector: 'app-botao-voltar',
  templateUrl: './botao-voltar.component.html',
  styleUrls: ['./botao-voltar.component.scss'],
})
export class BotaoVoltarComponent {
  @Input() class: string = 'btn-danger rounded-pill w-100';
  @Input() route: string = '';
  @Input() toast: string = '';

  constructor(
    private router: Router,
    private toastMessage: ToastMessageService
  ) {}

  voltar() {
    this.toastMessage.mostrarInfo(this.toast);
    this.router.navigate([`private/${this.route}`]);
  }
}
