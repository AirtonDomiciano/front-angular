import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent {
  @Input() isExpanded = false;
  @Output() emitterSignOut: EventEmitter<boolean> = new EventEmitter<boolean>();

  signOut() {
    this.emitterSignOut.emit(false);
  }
}
