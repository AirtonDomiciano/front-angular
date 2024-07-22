import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AtendimentoModel } from './model/atendimento-model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class AtendimentoComponent implements OnInit {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));

  public titulo: string = 'Cadastro Atendimento';

  public model: AtendimentoModel = new AtendimentoModel();
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private atendimentoService: AtendimentoService,
    private toast: ToastMessageService,
    private utils: UtilsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group(this.model);
    this.setarCamposRequeridos();

    if (this.id > 0) {
      this.editarAtendimento();
    }
  }

  async editarAtendimento(): Promise<void> {
    this.titulo = `Editar atendimento: ${this.id}`;
    const atendimento = await this.atendimentoService.buscarAtendimentoPorId(
      this.id
    );

    delete atendimento.idAtendimento;
    delete atendimento.valor;

    this.formGroup.setValue(atendimento);
  }

  setarCamposRequeridos() {
    this.utils.setarCamposRequeridos(['data', 'hora'], this.formGroup);
  }

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      this.toast.mostrarAviso(
        'É preciso preencher todos os campos para prosseguir.'
      );
      return;
    }
    const input: AtendimentoModel = this.formGroup.value;

    if (this.id) {
      input.idAtendimento = this.id;
    }

    const res = await this.atendimentoService.salvar(input);

    if (res) {
      if (this.id) {
        this.toast.mostrarSucesso('Atendimento Atualizado!');
        this.router.navigate([`private/servico/${this.id}`]);
      } else {
        const atendimentos =
          await this.atendimentoService.buscarTodosAtendimentos();

        const index = atendimentos.length - 1;
        const idAtendimento = atendimentos[index].idAtendimento;
        this.toast.mostrarSucesso('Novo atendimento!');
        this.router.navigate([`private/servico/${idAtendimento}`]);
      }
    }
  }
}
