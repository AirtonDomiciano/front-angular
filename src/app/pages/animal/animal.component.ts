import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import AnimaisModel from '../animais/model/animais.model';
import { Animais } from 'src/app/shared/models/animais';
import { AnimaisService } from 'src/app/services/animais.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: AnimaisModel = new AnimaisModel();

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private animalService: AnimaisService
  ) {}

  async ngOnInit(): Promise<void> {
    this.formGroup = this.fb.group(this.model);
    this.onSubmit();
    if (this.id > 0) {
      this.editarAnimal();
    }
    this.requiredForm();
  }

  requiredForm() {
    this.formGroup.controls['nome'].setValidators([Validators.required]);
    this.formGroup.controls['idClientes'].setValidators([Validators.required]);
    this.formGroup.controls['divisao'].setValidators([Validators.required]);
    this.formGroup.controls['especie'].setValidators([Validators.required]);
    this.formGroup.controls['raca'].setValidators([Validators.required]);
  }

  async editarAnimal(): Promise<void> {
    this.model = await this.animalService.buscarAnimalPorId(this.id);
    delete this.model.idAnimal;
    if (!this.model) {
      this.formGroup.setValue(this.model);
    }
  }

  validationSave(input: Animais): boolean {
    let validation: boolean = true;
    if (!input.nome || !input.divisao || !input.especie || !input.raca) {
      validation = false;
    }
    return validation;
  }

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      return;
    }
    const input: AnimaisModel = this.formGroup.value;
    if (this.id) {
      input.idAnimal = this.id;
    }
    const res = await this.animalService.salvar(input);
    if (res) {
      this.router.navigate([`private/animais`]);
    }
  }
}
