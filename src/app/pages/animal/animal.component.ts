import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import AnimaisModel from '../animais/model/animais-interface.';
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
  ) {
    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      divisao: ['', Validators.required],
      especie: ['', Validators.required],
      raca: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    this.formGroup.controls['nome'].setValidators([Validators.required]);
    this.formGroup.controls['divisao'].setValidators([Validators.required]);
    this.formGroup.controls['especie'].setValidators([Validators.required]);
    this.formGroup.controls['raca'].setValidators([Validators.required]);

    if (this.id) {
      const res = await this.animalService.buscarAnimalPorId(this.id);
      const animal = res;
      if (res) {
        this.formGroup.controls['nome'].setValue(animal.nome);
        this.formGroup.controls['divisao'].setValue(animal.divisao);
        this.formGroup.controls['especie'].setValue(animal.especie);
        this.formGroup.controls['raca'].setValue(animal.raca);
      }
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
    let input: Animais = this.formGroup.value;
    const validation: boolean = this.validationSave(input);
    if (validation) {
      this.animalService.adicionarAnimal(input);
    }

    if (validation && this.id) {
      this.animalService.editarAnimal(this.id, input);
    }
  }
}
