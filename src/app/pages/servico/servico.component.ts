import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoModel } from './model/servico.model';
import { ServicosService } from 'src/app/services/servicos.service';
import { ProdutosServicoInterface } from 'src/app/shared/interface/produtos-servico.interface';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/shared/models/produtos.model';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss'],
})
export class ServicoComponent implements OnInit {
  public formGroup!: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public model: ServicoModel = new ServicoModel();
  public produtosSelecionados: Produto[] = [];
  public servicoSelecionado: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private servicosService: ServicosService,
    private produtosService: ProdutosService
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
    this.darBaixaProduto(input.produtos!);
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

  async setarProdutos(input: ProdutosServicoInterface[]): Promise<void> {
    const produtos = await this.produtosService.BuscarTodosProdutos();
    this.produtosSelecionados = [];

    for (let produto of input) {
      const salvar = produtos.find(
        (el) => el.idProdutos === produto.idProdutos
      );
      if (salvar) {
        this.produtosSelecionados.push(salvar);
      }
    }

    this.formGroup.controls['produtos'].setValue(this.produtosSelecionados);
  }

  setarServicoSelecionado(id: number) {
    this.servicoSelecionado = id;
  }

  darBaixaProduto(produtos: Produto[]) {
    for (let produto of produtos) {
      produto.qtdeSaida += 1;
      produto.qtdeTotal -= 1;
      this.produtosService.salvar(produto);
    }
  }
}
