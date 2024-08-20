import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ToastMessageService } from '../../services/toast-message.service';

@Component({
  selector: 'app-botao-voltar',
  templateUrl: './botao-voltar.component.html',
  styleUrls: ['./botao-voltar.component.scss'],
})
export class BotaoVoltarComponent {
  @Input() btnClass: string = '';
  @Input() btnRoute: string = '';
  @Input() btnToast: string = '';

  constructor(private router: Router, private toast: ToastMessageService) {}

  voltar() {
    this.toast.mostrarInfo(this.btnToast);
    this.router.navigate([this.btnRoute]);
  }
}
