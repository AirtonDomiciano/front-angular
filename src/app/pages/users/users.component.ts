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
  public usuariosRemovidos: UserModel[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listagemUsuarios = UsersMock;
    this.usuariosRemovidos = [];
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
      this.usuariosRemovidos.push(this.listagemUsuarios[index]);
      UsersMock.splice(index, 1);
    }
  }

  desfazerAcao() {
    for (var i = 0; i < this.usuariosRemovidos.length; i++) {
      this.listagemUsuarios.push(this.usuariosRemovidos[i]);
    }
    this.listagemUsuarios = this.listagemUsuarios.sort((a, b) => a.id! - b.id!);
    this.usuariosRemovidos.splice(0, this.usuariosRemovidos.length);
  }
}
