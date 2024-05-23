import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClientesInterface from '../clientes/model/clientes.interface';
import ClientesModel from '../clientes/model/clientes.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {
  public formGroup: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: ClientesModel = new ClientesModel();
  public cliente!: ClientesInterface;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = this.fb.group(this.model);
  }

  ngOnInit(): void {
    this.formGroup.controls['nomeClientes'].setValidators([
      Validators.required,
    ]);
    this.formGroup.controls['endereco'].setValidators([Validators.required]);
    this.formGroup.controls['cep'].setValidators([Validators.required]);
    this.formGroup.controls['cpfCnpj'].setValidators([Validators.required]);
    this.formGroup.controls['fone'].setValidators([Validators.required]);
    this.formGroup.controls['email'].setValidators([Validators.required]);
    this.formGroup.controls['dtaNascimento'].setValidators([
      Validators.required,
    ]);
    if (this.id) {
      this.formGroup = this.fb.group(this.cliente);
    }
  }

  onSubmit() {
    let input: ClientesInterface = this.formGroup.value;
    const validation: boolean = this.validationSave(input);
    if (this.id) {
      if (this.formGroup.valid) {
        this.router.navigate([`private/produtos`]);
      }
      return;
    }
    if (validation) {
      this.router.navigate([`private/produtos`]);
    }
  }

  validationSave(input: ClientesInterface): boolean {
    let validation = true;

    if (
      !input.nomeClientes ||
      !input.endereco ||
      !input.cep ||
      !input.cpfCnpj ||
      !input.email ||
      !input.fone ||
      !input.dtaNascimento
    ) {
      validation = false;
    }
    return validation;
  }
}
