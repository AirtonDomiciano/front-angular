import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sidebarExpanded = true;
  public loggedIn = false;
  public cadastro = false;

  receiveEmitLoggedIn() {
    this.loggedIn = true;
  }

  receiveEmitSignOut(answear: boolean) {
    this.loggedIn = answear;
  }

  receiveEmitCadastro() {
    this.cadastro = true;
  }

  receiveEmitLogin() {
    this.cadastro = false;
  }
}
