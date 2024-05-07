import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user/model/user.model';
import { UsersMock } from './users.mock';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  public listagemUsuarios: UserModel[] = [];
  public contUsuariosRemovidos: number = 0;
  public ativoFormGroup: FormGroup = new FormGroup({});

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listagemUsuarios = UsersMock;
    this.inicializandoAtivos();
    this.contadorUsersRemovidos();
    console.log(this.listagemUsuarios);
  }

  addUser() {
    this.router.navigate([`user`]);
  }

  editarUser(id: number) {
    this.router.navigate([`edit-user/${id}`]);
  }

  removerUser(id: number): void {
    const index = this.listagemUsuarios.findIndex((el) => el.idUsuario === id);
    if (index !== -1) {
      this.contUsuariosRemovidos++;
      UsersMock[index].removido = true;
    }
  }

  desfazerAcao() {
    this.contUsuariosRemovidos = 0;
    for (var i = 0; i < this.listagemUsuarios.length; i++) {
      this.listagemUsuarios[i].removido = false;
    }
  }

  contadorUsersRemovidos() {
    for (var i = 0; i < this.listagemUsuarios.length; i++) {
      if (this.listagemUsuarios[i].removido) {
        this.contUsuariosRemovidos++;
      }
    }
  }

  inicializandoAtivos(): void {
    const group: any = {};
    this.listagemUsuarios.forEach((api) => {
      group[api.idUsuario!.toString()] = new FormControl(api.ativo === true);
    });
    this.ativoFormGroup = new FormGroup(group);
  }
}
