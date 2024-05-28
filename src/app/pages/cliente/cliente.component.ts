import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClientesModel from 'src/app/shared/models/clientes.model';
import ClientesInterface from 'src/app/shared/models/clientes.interface';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: ClientesModel = new ClientesModel();
  public cliente!: ClientesInterface;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) {
    this.formGroup = this.fb.group(this.model);
  }

  async ngOnInit(): Promise<void> {
    this.formGroup.controls['nomeClientes'].setValidators([
      Validators.required,
    ]);
    this.formGroup.controls['endereco'].setValidators([Validators.required]);
    this.formGroup.controls['cep'].setValidators([Validators.required]);
    this.formGroup.controls['cpfCnpj'].setValidators([Validators.required]);
    this.formGroup.controls['fone'].setValidators([Validators.required]);
    this.formGroup.controls['email'].setValidators([
      Validators.required,
      Validators.email,
    ]);

    if (this.id) {
      const res = await this.clientesService.buscarClientePorId(this.id);
      if (res) {
        this.cliente = res;
        this.formGroup.controls['nomeClientes'].setValue(
          this.cliente.nomeClientes
        );
        this.formGroup.controls['endereco'].setValue(this.cliente.endereco);
        this.formGroup.controls['cep'].setValue(this.cliente.cep);
        this.formGroup.controls['cpfCnpj'].setValue(this.cliente.cpfCnpj);
        this.formGroup.controls['fone'].setValue(this.cliente.fone);
        this.formGroup.controls['email'].setValue(this.cliente.email);
      }
    }
  }

  async onSubmit() {
    let input: ClientesInterface = this.formGroup.value;
    const validation: boolean = this.validationSave(input);
    if (this.id && validation) {
      if (this.formGroup.valid) {
        input.ativo = true;
        input.listaNegra = false;
        await this.clientesService.editarCliente(this.id, input);
        this.router.navigate([`private/clientes`]);
      }
      return;
    }
    if (validation) {
      input.ativo = true;
      input.listaNegra = false;
      const res = await this.clientesService.criarCliente(input);
      if (res) {
        this.router.navigate([`private/clientes`]);
      }
    }
  }

  validationSave(input: ClientesInterface): boolean {
    let validation = true;

    if (
      !input.nomeClientes ||
      !input.endereco ||
      !input.cep ||
      input.cep.length !== 8 ||
      !input.cpfCnpj ||
      !input.email ||
      !input.fone
      // !input.dtaNascimento
    ) {
      validation = false;
    }
    return validation;
  }
}
