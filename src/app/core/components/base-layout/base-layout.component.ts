import { Component } from '@angular/core';

@Component({
  selector: 'base-layout',
  templateUrl: 'base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export class BaseLayoutComponent {
  public sidebarExpanded = true;

  receiveEmitSignOut(answear: boolean) {}
}
