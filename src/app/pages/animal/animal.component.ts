import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import AnimaisModel from '../animais/model/animais.model';
import { AnimaisService } from 'src/app/services/animais.service';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: AnimaisModel = new AnimaisModel();
  public titulo = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private animalService: AnimaisService,
    private toast: ToastMessageService
  ) {}

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group(this.model);
    this.validaCamposRequiridos();
    this.titulo = this.id > 0 ? 'Editar Animal' : 'Cadastrar Animal';
    if (this.id) {
      this.editar();
    }
  }

  validaCamposRequiridos() {
    this.formGroup.controls['nome'].setValidators([Validators.required]);
    this.formGroup.controls['idClientes'].setValidators([Validators.required]);
    this.formGroup.controls['divisao'].setValidators([Validators.required]);
    this.formGroup.controls['especie'].setValidators([Validators.required]);
    this.formGroup.controls['raca'].setValidators([Validators.required]);
    this.formGroup.controls['ativo'].setValidators([Validators.required]);
  }

  async editar(): Promise<void> {
    this.model = await this.animalService.buscarPorId(this.id);
    delete this.model.idAnimal;
    this.formGroup.setValue(this.model);
  }

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      this.toast.mostrarAviso(
        'É preciso preencher todos os campos para prosseguir.'
      );
      return;
    }

    const input: AnimaisModel = this.formGroup.value;

    if (this.id) input.idAnimal = this.id;

    const res = await this.animalService.salvar(input);

    if (res) {
      if (this.id) {
        this.toast.mostrarSucesso('Edição Concluída!');
      } else {
        this.toast.mostrarSucesso('Animal Adicionado!');
      }
      this.router.navigate([`private/animais`]);
    }
  }
}
