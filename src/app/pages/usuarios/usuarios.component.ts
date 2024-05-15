import { Component, OnInit } from '@angular/core';
import { UsuariosMock } from './usuarios.mock';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UsuarioModel } from '../usuario/model/usuario.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  public listagemUsuarios: UsuarioModel[] = [];
  public contUsuariosRemovidos: number = 0;
  public ativoFormGroup: FormGroup = new FormGroup({});

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.listagemUsuarios = UsuariosMock;
    this.inicializandoAtivos();
    this.contadorUsuariosRemovidos();
    console.log(this.listagemUsuarios);
  }

  adicionarUsuario() {
    this.router.navigate([`private/usuario`]);
  }

  editarUsuario(id: number) {
    this.router.navigate([`private/usuario/${id}`]);
  }

  removerUsuario(id: number): void {
    const index = this.listagemUsuarios.findIndex((el) => el.idUsuario === id);
    if (index !== -1) {
      this.contUsuariosRemovidos++;
      UsuariosMock[index].removido = true;
    }
  }

  desfazerAcao() {
    this.contUsuariosRemovidos = 0;
    for (var i = 0; i < this.listagemUsuarios.length; i++) {
      this.listagemUsuarios[i].removido = false;
    }
  }

  contadorUsuariosRemovidos() {
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
