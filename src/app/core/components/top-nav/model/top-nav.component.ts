import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  public popUpAtivo: boolean = false;

  constructor(private router: Router) {}

  @Output() emitterSignOut: EventEmitter<boolean> = new EventEmitter<boolean>();

  editarPerfil() {
    this.router.navigate([`edit-user/`]);
  }

  minhasCompras() {
    this.router.navigate([`shopping`]);
  }

  popUp() {
    this.popUpAtivo = !this.popUpAtivo;
  }

  signOut() {
    this.emitterSignOut.emit(false);
    this.router.navigate([`login`]);
  }
}
