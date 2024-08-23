import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario/model/usuario.model';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  public listagemUsuarios: UsuarioModel[] = [];
  public contUsuariosRemovidos: number = 0;
  public ativos: boolean = true;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
    private toast: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.buscarTodosUsuarios(this.ativos);
  }

  async buscarTodosUsuarios(ativo: boolean) {
    const res = await this.usuariosService.buscarAtivosInativos(ativo);

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
      this.toast.mostrarSucesso('Usuário removido com sucesso!');
    } else {
      this.toast.mostrarErro(
        'Não foi possivel remover o usuário, pois ele já está vinculado com o serviço.'
      );
    }
  }
}
