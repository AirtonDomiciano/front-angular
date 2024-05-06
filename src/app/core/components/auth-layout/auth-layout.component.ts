import { Component } from '@angular/core';

@Component({
  selector: 'auth-layout',
  template: ` <div id="content-wrapper" class="d-flex flex-column">
    <div id="content">
      <div>
        <router-outlet></router-outlet>
      </div>
      <!-- <app-footer></app-footer> -->
    </div>
  </div>`,
})
export class AuthLayoutComponent {}
