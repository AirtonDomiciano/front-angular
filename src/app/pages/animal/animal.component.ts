import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import AnimaisModel from '../animais/model/animais-interface.';
import { Animais } from 'src/app/shared/models/animais';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: AnimaisModel = new AnimaisModel();
  public animal!: Animais;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
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
    }
  }

  async onSubmit() {}
}
