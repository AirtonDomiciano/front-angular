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
  public ativoFormGroup: FormGroup = new FormGroup({});

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listagemUsuarios = UsersMock;
    this.inicializandoAtivos();
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
      UsersMock.splice(index, 1);
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
