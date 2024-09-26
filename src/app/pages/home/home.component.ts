import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { AtendimentoService } from 'src/app/services/atendimento.service';
import { ProdutosService } from 'src/app/services/produtos.service';
import Produto from 'src/app/shared/model/produtos';
import 'moment/locale/pt-br';
import { GraficoAtendimentosInterface } from 'src/app/shared/interface/grafico-atendimentos.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public produtosSemEstoque: Produto[] = [];
  public colunasGrafico: string[] = [];
  public datas: Date[] = [];

  public labelGraficoAtendimento = ['Atendimentos'];
  public coresGraficoAtendimento: string[] = ['#add8e6'];
  public valoresGraficoAtendimento: number[][] = [[0, 0, 0, 0, 0, 0, 0]];
  public atendimentos: GraficoAtendimentosInterface[] = [];

  public labelGraficoLucro = ['Lucro', 'Valor Recebido'];
  public coresGraficoLucro: string[] = [
    'rgba(0, 204, 153, 1)',
    'rgba(255, 127, 0, 1)',
  ];
  public valoresGraficoLucro: number[][] = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ];

  constructor(
    private router: Router,
    private produtosService: ProdutosService,
    private atendimentoService: AtendimentoService
  ) {}

  async ngOnInit(): Promise<void> {
    this.buscarProdutosSemEstoque();
    this.datas = await this.ultimosSeteDias();
    this.processarAtendimentos();
  }

  async buscarProdutosSemEstoque(): Promise<void> {
    const produtos = await this.produtosService.BuscarTodosProdutos();
    this.produtosSemEstoque = produtos.filter((el) => el.qtdeTotal === 0);
  }

  redirecionarParaCatalogo() {
    this.router.navigate([`private/catalogo`]);
  }

  async ultimosSeteDias(): Promise<Date[]> {
    moment.locale('pt-br');
    const datas: Date[] = [];
    const dataInicial = moment().add(1, 'days');

    for (let i = 0; i < 7; i++) {
      const data = moment().subtract(i, 'days').startOf('day');
      const dia = data.format('ddd');
      const dataFormatada = data.toDate();

      datas.push(dataFormatada);
      this.colunasGrafico.push(dia);
    }

    await this.buscarAtendimentosPorData(
      datas[6].toISOString(),
      dataInicial.toISOString()
    );

    this.colunasGrafico.reverse();
    return datas;
  }

  async buscarAtendimentosPorData(dataInicio: string, dataTermino: string) {
    this.atendimentos = await this.atendimentoService.buscarAtendimentosPorData(
      dataInicio,
      dataTermino
    );
  }

  processarAtendimentos() {
    for (let atendimento of this.atendimentos) {
      this.setarValores(atendimento, 'atendimento');
      this.setarValores(atendimento, 'lucro');
    }
    this.valoresGraficoAtendimento[0].reverse();
    this.valoresGraficoLucro[0].reverse();
    this.valoresGraficoLucro[1].reverse();
  }

  setarValores(
    atendimento: GraficoAtendimentosInterface,
    tipo: 'atendimento' | 'lucro'
  ) {
    const dataAtendimento = moment(atendimento.data).format('YYYY-MM-DD');

    for (let j = 0; j < this.datas.length; j++) {
      const dataComparacao = moment(this.datas[j]).format('YYYY-MM-DD');

      if (dataAtendimento === dataComparacao) {
        if (tipo === 'atendimento') {
          this.valoresGraficoAtendimento[0][j]++;
        } else {
          this.valoresGraficoLucro[0][j] +=
            atendimento.valor - atendimento.valorTipoServico;
          this.valoresGraficoLucro[1][j] += atendimento.valor;
        }
        break;
      }
    }
  }
}
