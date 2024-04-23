import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user/user.model';
import { UsersMock } from './users.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public listagemUsuarios: UserModel[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listagemUsuarios = UsersMock;
  }

  addUser() {
    this.router.navigate([`user`]);
  }

  editarUser(id: number) {
    this.router.navigate([`edit-user/${id}`]);
  }

  removerUser(id: number): void {
    const index = this.listagemUsuarios.findIndex((el) => el.id === id);
    if (index !== -1) {
      UsersMock.splice(index, 1);
    }
  }
}
