import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';
import { EnderecoInterface } from 'src/app/shared/components/input-cep/endereco.interface';
import { ClienteModel } from './model/cliente.model';
import Clientes from 'src/app/shared/model/clientes';
import { ToastMessageService } from 'src/app/shared/services/toast-message.service';
import { UtilsService } from 'src/app/shared/utils/utils.service';
import { ManipulaCampoAtivoService } from 'src/app/services/ativo.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: ClienteModel = new ClienteModel();
  public cliente!: Clientes;
  public titulo: string = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private clientesService: ClientesService,
    private toast: ToastMessageService,
    private utilsService: UtilsService,
    private manipulaCampoAtivoService: ManipulaCampoAtivoService
  ) {
    this.formGroup = this.fb.group(this.model);
  }

  async ngOnInit(): Promise<void> {
    this.validaCamposRequeridos();
    this.titulo = this.id ? 'Editar Cliente' : 'Cadastro Cliente';
    if (this.id) {
      this.editar();
    }
  }

  async onSubmit() {
    const input: ClienteModel = this.formGroup.value;
    if (this.formGroup.invalid || input.idCidades! <= 0 || input.idUf! <= 0) {
      this.toast.mostrarAviso(
        'É preciso preencher todos os campos para prosseguir.'
      );
      return;
    }
    input.email = input.email.toLocaleLowerCase();

    if (this.id) input.idClientes = this.id;

    const res = await this.clientesService.salvar(input);

    if (res) {
      if (this.id) {
        this.toast.mostrarSucesso('Edição concluída!');
      } else {
        this.toast.mostrarSucesso('Cliente adicionado!');
      }
      this.router.navigate([`private/clientes`]);
      this.manipulaCampoAtivoService.atualizarValorAtivo(input.ativo);
    }
  }

  validaCamposRequeridos() {
    const campos: Array<string> = [
      'nomeClientes',
      'cep',
      'cpfCnpj',
      'fone',
      'email',
      'logradouro',
      'bairro',
      'idCidades',
      'idUf',
    ];

    this.utilsService.setarCamposRequeridos(campos, this.formGroup);
  }

  async onLoadCep(event: EnderecoInterface) {
    this.formGroup.controls['localidade'].setValue(event.localidade);
    this.formGroup.controls['uf'].setValue(event.uf);
    this.formGroup.controls['logradouro'].setValue(event.logradouro);
    this.formGroup.controls['bairro'].setValue(event.bairro);
  }

  async editar(): Promise<void> {
    this.model = await this.clientesService.buscarClientePorId(this.id);
    delete this.model.idClientes;
    this.formGroup.setValue(this.model);
  }
}
