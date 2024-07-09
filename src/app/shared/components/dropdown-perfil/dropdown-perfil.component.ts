import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/guards/auth.service';
import { LocalService } from 'src/app/core/services/local.service';

@Component({
  selector: 'app-dropdown-perfil',
  templateUrl: './dropdown-perfil.component.html',
  styleUrls: ['./dropdown-perfil.component.scss'],
})
export class DropdownPerfilComponent {
  constructor(
    public auth: AuthService,
    private localService: LocalService,
    private router: Router
  ) {}

  verPerfil() {
    const usuario = this.localService.getUser();
    this.router.navigate([`private/usuario/${usuario.idUser}`]);
  }

  sair() {
    this.auth.logout();
  }

  configuracaoDoServico() {
    this.router.navigate(['private/configuracoes']);
  }
}
