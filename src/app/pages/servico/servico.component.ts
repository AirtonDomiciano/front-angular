import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicoModel } from './model/servico.model';
import { ServicosService } from 'src/app/services/servicos.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import { TipoServicoService } from 'src/app/services/tipo-servico.service';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ProdutosDoServicoService } from 'src/app/services/produtosdoservico.service';
import { calcularValorAtendimento } from 'src/app/shared/interface/calcular-valor-atendimento.interface';
import { TipoServicoInterface } from 'src/app/shared/interface/tipo-servico.interface';
import ProdutosServico from 'src/app/shared/interface/produtos-servico.interface';
import { LocalService } from 'src/app/core/services/local.service';
import ProdutosDoServicoModel from './model/produtos-do-servico.model';
import Produto from 'src/app/shared/model/produtos';
import { ContasReceberService } from 'src/app/services/contas-receber.service';
import ContasReceberModel from './model/contas-receber.model';
import { ParcelasService } from 'src/app/services/parcelas.service';
import FormularioServicoInterface from 'src/app/shared/interface/formulario-servico.interface';

@Component({
  selector: 'app-servico',
  templateUrl: './servico.component.html',
  styleUrls: ['./servico.component.scss'],
})
export class ServicoComponent implements OnInit {
  @Output() emitterFormServico: EventEmitter<FormularioServicoInterface> =
    new EventEmitter<FormularioServicoInterface>();

  public formGroup!: FormGroup;
  public idAtendimento!: number;
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
    private atendimentoService: AtendimentoService,
    private produtosDoServicoService: ProdutosDoServicoService,
    private tipoServicoService: TipoServicoService,
    private contasReceberService: ContasReceberService,
    private parcelasService: ParcelasService,
    private localService: LocalService
  ) {
    delete this.model.idServicos;
    delete this.model.idAtendimento;
    this.formGroup = this.fb.group(this.model);
  }

  async ngOnInit(): Promise<void> {
    this.setarCamposRequiridos();
    if (this.id > 0) {
      this.editarServico();
    }
  }

  async editarServico() {
    const res = await this.servicosService.buscarPorIdAtendimento(this.id);

    const produtosDoServico =
      await this.produtosDoServicoService.BuscarPorIdServico(res.idServicos!);

    const produtos = await this.produtosService.BuscarTodosProdutos();
    const produtosFiltrados: Produto[] = [];

    for (let obj of produtosDoServico) {
      const produto = produtos.find((el) => el.idProdutos === obj.idProdutos);
      produtosFiltrados.push(produto!);
    }

    const tipoServico = await this.tipoServicoService.buscarServicoPorId(
      res.idTipoServico
    );

    this.model.idAnimal = res.idAnimal;
    this.model.idClientes = res.idClientes;
    this.model.tipoServico = tipoServico;
    this.model.produtos = produtosFiltrados;

    this.formGroup.setValue(this.model);

    const contaReceber = await this.contasReceberService.buscarPorIdAtendimento(
      this.id
    );

    let parcelas;

    if (res.status > 2) {
      parcelas = await this.parcelasService.buscarPorIdContasReceber(
        contaReceber.idContasReceber!
      );
    }

    if (parcelas) {
      await this.parcelasService.deletar(contaReceber.idContasReceber!);
    }
    await this.contasReceberService.deletarPorIdAtendimento(this.id);
  }

  setarCamposRequiridos() {
    this.formGroup.controls['tipoServico'].setValidators([Validators.required]);
    this.formGroup.controls['produtos'].setValidators([Validators.required]);
  }

  async onSubmit(): Promise<void> {
    if (this.formGroup.invalid) {
      return;
    }

    const input: ServicoModel = this.formGroup.value;

    let produtosDoServico: ProdutosDoServicoModel[] = [];

    const produtos = input.produtos;
    delete input.produtos;

    input.idTipoServico = input.tipoServico?.idTipoServico!;
    delete input.tipoServico;

    if (this.id > 0) {
      const servico = await this.servicosService.buscarPorIdAtendimento(
        this.idAtendimento!
      );
      input.idServicos = servico.idServicos;
      input.status = servico.status;
      produtosDoServico =
        await this.produtosDoServicoService.BuscarPorIdServico(
          servico.idServicos!
        );

      await this.produtosDoServicoService.deletarPorIdServicos(
        input.idServicos!
      );
    }
    const usuario = this.localService.getUser();

    input.idUsuarios = usuario.idUser;
    input.idAtendimento = this.idAtendimento;

    const res = await this.servicosService.salvar(input);

    if (res) {
      const servico = await this.servicosService.buscarPorIdAtendimento(
        this.idAtendimento!
      );
      const idServico = servico.idServicos;
      this.darBaixaProduto(produtos!, produtosDoServico);
      for (let produto of produtos!) {
        const obj: ProdutosDoServicoModel = {
          idServicos: idServico!,
          idProdutos: produto.idProdutos!,
        };
        this.produtosDoServicoService.salvar(obj);
      }

      const calcularValor: calcularValorAtendimento = {
        produtos: produtos!,
        idTipoServico: input.idTipoServico!,
      };
      const valor = await this.calcularValorAtendimento(calcularValor);

      const atendimento = await this.atendimentoService.buscarAtendimentoPorId(
        this.idAtendimento!
      );

      const contaReceber: ContasReceberModel = {
        idAtendimento: this.id,
        idClientes: input.idClientes,
        valor: valor,
        valorPago: 0,
        pago: false,
      };

      await this.contasReceberService.salvar(contaReceber);

      atendimento.valor = valor;

      await this.atendimentoService.salvar(atendimento);

      this.router.navigate([`private/atendimentos`]);
    }
  }

  async setarProdutos(input: ProdutosServico[]): Promise<void> {
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

  async darBaixaProduto(
    produtos: Produto[],
    produtoDoServico: ProdutosDoServicoModel[]
  ): Promise<void> {
    let produtosNovos: Produto[] = produtos;
    let produtosDoServicoRetirados: ProdutosDoServicoModel[] = [];
    if (this.id > 0) {
      produtosNovos = produtos.filter(
        (a1) => !produtoDoServico.some((a2) => a1.idProdutos === a2.idProdutos)
      );

      produtosDoServicoRetirados = produtoDoServico.filter(
        (a1) => !produtos.some((a2) => a1.idProdutos === a2.idProdutos)
      );

      const todosProdutos = await this.produtosService.BuscarTodosProdutos();
      const produtosRetirados: Produto[] = [];

      for (let produtoDoServico of produtosDoServicoRetirados) {
        const obj = todosProdutos.find(
          (el) => el.idProdutos === produtoDoServico.idProdutos
        );
        produtosRetirados.push(obj!);
      }

      for (let produto of produtosRetirados) {
        produto.qtdeSaida -= 1;
        produto.qtdeTotal += 1;
        this.produtosService.salvar(produto);
      }
    }

    for (let produto of produtosNovos) {
      produto.qtdeSaida += 1;
      produto.qtdeTotal -= 1;
      this.produtosService.salvar(produto);
    }
  }

  async calcularValorAtendimento(
    obj: calcularValorAtendimento
  ): Promise<number> {
    const tipoServico: TipoServicoInterface =
      await this.tipoServicoService.buscarServicoPorId(obj.idTipoServico);

    let valor = tipoServico.valor;

    for (let produto of obj.produtos) {
      valor += produto.valor;
    }

    const valorArredondado = Number(valor.toFixed(2));

    return valorArredondado;
  }

  formEmitter() {
    const obj: FormularioServicoInterface = {
      formServico: this.formGroup.value,
      formInvalido: this.formGroup.invalid,
    };
    this.emitterFormServico.emit(obj);
  }

  receberIdAtendimento(id: number) {
    this.idAtendimento = id;
  }
}
