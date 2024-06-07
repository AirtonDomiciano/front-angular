import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import ClientesInterface from 'src/app/shared/models/clientes.interface';
import { ClientesService } from 'src/app/services/clientes.service';
import { EnderecoInterface } from 'src/app/shared/components/input-cep/endereco.interface';
import { ClienteModel } from './model/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: ClienteModel = new ClienteModel();
  public cliente!: ClientesInterface;
  public titulo: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private clientesService: ClientesService
  ) {
    this.formGroup = this.fb.group(this.model);
  }

  async ngOnInit(): Promise<void> {
    this.requiredForm();
    this.iniciarTitulo();
    if (this.id) {
      const res = await this.clientesService.buscarClientePorId(this.id);
      delete res.idClientes;
      if (res) {
        this.formGroup.setValue(res);
      }
    }
  }

  async onSubmit() {
    const input: ClienteModel = this.formGroup.value;
    if (this.formGroup.invalid || input.idCidades! <= 0 || input.idUf! <= 0) {
      return;
    }

    input.email = input.email.toLocaleLowerCase();

    if (this.id) {
      input.idClientes = this.id;
    }

    const res = await this.clientesService.salvar(input);

    if (res) {
      this.router.navigate([`private/clientes`]);
    }
  }

  requiredForm() {
    this.formGroup.controls['nomeClientes'].setValidators([
      Validators.required,
    ]);
    this.formGroup.controls['cep'].setValidators([Validators.required]);
    this.formGroup.controls['cpfCnpj'].setValidators([Validators.required]);
    this.formGroup.controls['fone'].setValidators([Validators.required]);
    this.formGroup.controls['email'].setValidators([
      Validators.required,
      Validators.email,
    ]);
    this.formGroup.controls['logradouro'].setValidators([Validators.required]);
    this.formGroup.controls['bairro'].setValidators([Validators.required]);
    this.formGroup.controls['idCidades'].setValidators([Validators.required]);
    this.formGroup.controls['idUf'].setValidators([Validators.required]);
  }

  onLoadCep(event: EnderecoInterface) {
    this.formGroup.controls['idCidades'].setValue(event.localidade);
    // this.formGroup.controls['idUf'].setValue(event.uf);
    this.formGroup.controls['logradouro'].setValue(event.logradouro);
    this.formGroup.controls['bairro'].setValue(event.bairro);
  }

  iniciarTitulo() {
    this.titulo = this.id ? 'Editar Cliente: ' + this.id : 'Cadastro Cliente';
  }
}
