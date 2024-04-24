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

  signOut() {
    this.emitterSignOut.emit(false);
  }

  popUp() {
    this.popUpAtivo = !this.popUpAtivo;
  }

  minhasCompras() {
    this.router.navigate(['shopping']);
  }

  editarPerfil(id: number) {
    this.router.navigate([`edit-user/${id}`]);
  }
}
