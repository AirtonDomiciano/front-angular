import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import AnimaisModel from '../animais/model/animais-interface.';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss'],
})
export class AnimalComponent implements OnInit {
  public formGroup!: UntypedFormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public semNome: boolean = false;
  public semDivisao: boolean = false;
  public semEspecie: boolean = false;
  public semRaca: boolean = false;

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

  onSubmit() {}

  ngOnInit(): void {
    if (this.id) {
      this.formGroup.controls['nome'].setValidators([Validators.required]);
      this.formGroup.controls['divisao'].setValidators([Validators.required]);
      this.formGroup.controls['especie'].setValidators([Validators.required]);
      this.formGroup.controls['raca'].setValidators([Validators.required]);
    }
  }
}
