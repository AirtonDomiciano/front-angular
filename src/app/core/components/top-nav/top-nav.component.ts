import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from 'src/app/core/guards/auth.service';
import { LocalService } from 'src/app/core/services/local.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  @Input() isExpanded = false;

  constructor(public auth: AuthService) {}

  signOut() {
    this.auth.logout();
  }
}
