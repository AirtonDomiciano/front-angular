import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoModel } from './model/servico.model';
import { ServicosService } from 'src/app/services/servicos.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { Produto } from 'src/app/shared/models/produtos.model';
import { ProdutosServicoInterface } from 'src/app/shared/interface/produtos-atendimento.interface';
import { ServicosAnimalService } from 'src/app/services/servicos-animal.service';

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
    private produtosService: ProdutosService,
    private servicosAnimalService: ServicosAnimalService
  ) {
    delete this.model.idAtendimento;
    this.formGroup = this.fb.group(this.model);
  }

  async ngOnInit(): Promise<void> {
    this.setarCamposRequiridos();
    const editar = await this.verificarServico();
    if (editar) {
      this.editarServico();
    }
  }

  async verificarServico(): Promise<boolean> {
    const res = await this.servicosService.buscarPorIdAtendimento(this.id);
    console.log(res);
    return res.length > 0 ? true : false;
  }

  async editarServico() {
    const input = await this.servicosService.buscarPorIdAtendimento(this.id);

    const produtos = await this.produtosService.BuscarTodosProdutos();
    for (let servico of input) {
      const salvar = produtos.find(
        (el) => el.idProdutos === servico.idProdutos
      );
      if (salvar) {
        this.produtosSelecionados.push(salvar!);
      }
    }

    const servicoAnimal = await this.servicosAnimalService.buscarServicoPorId(
      input[0].idServicosAnimal
    );
    this.formGroup.controls['produtos'].setValue(this.produtosSelecionados);

    this.formGroup.controls['servicoAnimal'].setValue(servicoAnimal);
    this.formGroup.controls['idClientes'].setValue(input[0].idClientes);
    this.formGroup.controls['idAnimal'].setValue(input[0].idAnimal);
  }

  setarCamposRequiridos() {
    this.formGroup.controls['servicoAnimal'].setValidators([
      Validators.required,
    ]);
    this.formGroup.controls['produtos'].setValidators([Validators.required]);
  }

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      return;
    }

    const input: ServicoModel = this.formGroup.value;

    this.darBaixaProduto(input.produtos!);

    input.idServicosAnimal = input.servicoAnimal!.idServicosAnimal;
    input.valorServico = input.servicoAnimal!.valor;

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
