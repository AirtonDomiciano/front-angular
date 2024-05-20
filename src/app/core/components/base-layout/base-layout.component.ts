import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'base-layout',
  templateUrl: 'base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
})
export default class BaseLayoutComponent implements OnInit {
  public sidebarExpanded = true;

  constructor(
    private router: Router,
    private LocalStorageService: LocalService
  ) {}

  ngOnInit(): void {}

  receiveEmitSignOut(answear: boolean) {}
}
