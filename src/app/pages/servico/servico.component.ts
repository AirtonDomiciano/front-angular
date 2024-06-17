import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoModel } from './model/servico.model';
import { ServicosService } from 'src/app/services/servicos.service';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss'],
})
export class ServicoComponent implements OnInit {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: ServicoModel = new ServicoModel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private servicosService: ServicosService
  ) {
    this.formGroup = this.fb.group(this.model);
  }

  ngOnInit(): void {
    this.setarCamposRequiridos();
  }

  setarCamposRequiridos() {
    this.formGroup.controls['produtos'].setValidators([Validators.required]);
    this.formGroup.controls['servicoAnimal'].setValidators([
      Validators.required,
    ]);
  }

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      return;
    }

    const input: ServicoModel = this.formGroup.value;
    input.idServicosAnimal = input.servicoAnimal.idServicosAnimal;
    input.valorServico = input.servicoAnimal.valor;
    for (let produto of input.produtos!) {
      input.valorServico += produto.valor;
    }
    let res: boolean = true;
    for (let produto of input.produtos!) {
      const salvar = input;
      salvar.idProdutos = produto.idProdutos!;

      salvar.idAtendimento = this.id;

      res = await this.servicosService.salvar(input);
    }

    if (res) {
      this.router.navigate([`private/atendimentos`]);
    }
  }
}
