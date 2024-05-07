import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'base-layout',
  templateUrl: 'base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export default class BaseLayoutComponent implements OnInit {
  public sidebarExpanded = true;

  constructor(
    private router: Router,
    private LocalStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {
    const user: any = this.LocalStorageService.getLogin();

    if (!user?.token) {
      this.LocalStorageService.clearLogin();
    }
  }

  receiveEmitSignOut(answear: boolean) {}
}
