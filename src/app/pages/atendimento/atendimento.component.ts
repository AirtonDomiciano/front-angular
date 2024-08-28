import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AtendimentoModel } from './model/atendimento-model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import ServicoModel from './model/servico.model';
import FormularioServicoInterface from 'src/app/shared/interface/formulario-servico.interface';
import { ServicoComponent } from '../servico/servico.component';
import { UtilsService } from 'src/app/shared/utils/utils.service';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class AtendimentoComponent implements OnInit {
  @ViewChild('servico') servicoComponent!: ServicoComponent;

  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: AtendimentoModel = new AtendimentoModel();

  public formServico!: ServicoModel;
  public servicoInvalido: boolean = true;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private atendimentoService: AtendimentoService,
    private toast: ToastMessageService,
    private utilsService: UtilsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group(this.model);
    this.setarCamposRequeridos();

    if (this.id > 0) {
      this.editarAtendimento();
    }
  }

  async editarAtendimento(): Promise<void> {
    const atendimento = await this.atendimentoService.buscarAtendimentoPorId(
      this.id
    );

    delete atendimento.idAtendimento;
    delete atendimento.valor;

    this.formGroup.setValue(atendimento);
  }

  setarCamposRequeridos(): void {
    const campos = ['data', 'hora', 'titulo'];
    this.utilsService.setarCamposRequeridos(campos, this.formGroup);
  }

  async onSubmit(): Promise<void> {
    this.trazerDadosFormulario();

    if (this.formGroup.invalid || this.servicoInvalido) {
      this.toast.mostrarAviso(
        'É preciso preencher todos os campos para prosseguir.'
      );
      return;
    }
    const input: AtendimentoModel = this.formGroup.value;

    if (this.id) {
      input.idAtendimento = this.id;
    }

    await this.atendimentoService.salvar(input);
    const idAtendimento = await this.pegarIdCriado();
    this.servicoComponent.receberIdAtendimento(idAtendimento);
    this.salvarServico();
  }

  pegarValoresFormServico(obj: FormularioServicoInterface) {
    this.formServico = obj.formServico;
    this.servicoInvalido = obj.formInvalido;
  }

  trazerDadosFormulario() {
    this.servicoComponent.formEmitter();
  }

  salvarServico() {
    this.servicoComponent.onSubmit();
  }

  async pegarIdCriado(): Promise<number> {
    const atendimentos =
      await this.atendimentoService.buscarTodosAtendimentos();
    const atendimento = atendimentos[atendimentos.length - 1];
    return atendimento.idAtendimento!;
  }
}
