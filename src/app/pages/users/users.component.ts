import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user/user.model';
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
  }

  addUser() {
    this.router.navigate([`user`]);
  }

  editarUser(id: number) {
    this.router.navigate([`edit-user/${id}`]);
  }

  alterouAtivo(id: number) {
    const ativo = this.ativoFormGroup.get(id.toString())?.value;
    const index = this.listagemUsuarios.findIndex((el) => el.id === id);
    this.listagemUsuarios[index].ativo = ativo;
    UsersMock[index].ativo = this.listagemUsuarios[index].ativo;
  }

  removerUser(id: number): void {
    const index = this.listagemUsuarios.findIndex((el) => el.id === id);
    if (index !== -1) {
      this.contUsuariosRemovidos++;
      UsersMock[index].removido = true;
    }
  }

  desfazerAcao() {
    for (var i = 0; i < this.listagemUsuarios.length; i++) {
      if (this.listagemUsuarios[i].removido) {
        this.listagemUsuarios[i].removido = false;
      }
      this.contUsuariosRemovidos = 0;
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
      group[api.id!.toString()] = new FormControl(api.ativo === true);
    });
    this.ativoFormGroup = new FormGroup(group);
  }
}
