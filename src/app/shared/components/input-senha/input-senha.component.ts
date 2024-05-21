import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Icons } from './consts/icons.const';

@Component({
  selector: 'app-input-senha',
  templateUrl: './input-senha.component.html',
  styleUrls: ['./input-senha.component.scss'],
})
export class InputSenhaComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() frmType: string = 'password';
  @Input() frmClass = 'form-control rounded-pill mt-2';
  @Input() id = '';
  @Input() frmName = '';
  @Input() frmPlaceholder = '';

  public mostrarSenha: boolean = false;
  public listIcons!: string[];
  public icon: string = 'bi bi-eye-slash-fill';

  ngOnInit(): void {
    this.listIcons = Icons;
  }

  alterarEstadoInputSenha() {
    this.mostrarSenha = !this.mostrarSenha;
    if (this.mostrarSenha) {
      this.frmType = 'text';
      this.icon = this.listIcons[0];
    } else {
      this.frmType = 'password';
      this.icon = this.listIcons[1];
    }
  }
}
