import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario/model/usuario.model';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  listagemUsuarios: UsuarioModel[] = [];
  public contUsuariosRemovidos: number = 0;

  constructor(
    private router: Router,
    public usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    this.buscarTodosUsuarios();
  }

  async buscarTodosUsuarios() {
    const res = await this.usuariosService.buscarTodosUsuarios();

    if (!res) {
      alert('Deu ruim!');
      return;
    }

    this.listagemUsuarios = res;
  }

  adicionarUsuario() {
    this.router.navigate([`private/usuario`]);
  }

  editarUsuario(id: number) {
    this.router.navigate([`private/usuario/${id}`]);
  }

  async removerUsuario(id: number): Promise<void> {
    const res = await this.usuariosService.deletarUsuario(id);

    if (res) {
      // DELETADO COM SUCESSO;
      await this.buscarTodosUsuarios();
    }
  }
}
