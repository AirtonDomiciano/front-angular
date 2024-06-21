import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AtendimentoModel } from './model/atendimento-model';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ServicosService } from 'src/app/services/servicos.service';

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
    private servicosService: ServicosService
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

    this.formGroup.setValue(atendimento);
  }

  setarCamposRequeridos(): void {
    this.formGroup.controls['data'].setValidators([Validators.required]);
    this.formGroup.controls['hora'].setValidators([Validators.required]);
  }

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      return;
    }
    const input: AtendimentoModel = this.formGroup.value;

    if (this.id) {
      input.idAtendimento = this.id;
    }

    const res = await this.atendimentoService.salvar(input);

    if (res) {
      if (this.id) {
        this.router.navigate([`private/servico/${this.id}`]);
      } else {
        const atendimentos =
          await this.atendimentoService.buscarTodosAtendimentos();

        const index = atendimentos.length - 1;
        const idAtendimento = atendimentos[index].idAtendimento;

        this.router.navigate([`private/servico/${idAtendimento}`]);
      }
    }
  }
}
