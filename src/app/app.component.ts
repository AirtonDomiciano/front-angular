import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sidebarExpanded = true;
  public loggedIn = false;

  receiveEmitLoggedIn() {
    this.loggedIn = true;
  }
}
