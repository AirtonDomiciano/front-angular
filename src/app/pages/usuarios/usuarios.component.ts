import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from '../usuario/model/usuario.model';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { ManipulaCampoAtivoService } from 'src/app/services/ativo.service';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {
  public listagemUsuarios: UsuarioModel[] = [];
  public contUsuariosRemovidos: number = 0;
  public mostrarAtivos: boolean = true;

  constructor(
    private router: Router,
    private usuariosService: UsuariosService,
    private toast: ToastMessageService,
    private manipularCampoAtivosService: ManipulaCampoAtivoService
  ) {}

  ngOnInit(): void {
    this.mostrarAtivos =
      this.manipularCampoAtivosService.MostrarValorAtivoAtual();
    this.filtrar();
  }

  async filtrar() {
    const res = await this.usuariosService.buscarAtivosInativos(
      this.mostrarAtivos
    );
    this.mostrarAtivos = !this.mostrarAtivos;
    this.manipularCampoAtivosService.atualizarValorAtivo(this.mostrarAtivos);

    if (res) {
      this.listagemUsuarios = res;
    } else {
      this.toast.mostrarAviso('Ops! Ação sem resposta...');
    }
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
