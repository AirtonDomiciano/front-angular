import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../../models/produtos.model';
import { FormGroup } from '@angular/forms';
import { ProdutosService } from 'src/app/services/produtos.service';

@Component({
  selector: 'app-multi-select-produtos',
  templateUrl: './multi-select-produtos.component.html',
  styleUrls: ['./multi-select-produtos.component.scss'],
})
export class MultiSelectProdutosComponent implements OnInit {
  @Input() form!: FormGroup;
  @Input() frmName = '';
  @Input() frmId = '';
  @Input() frmPlaceholder = '';
  public listaProdutos: Produto[] = [];
  public produtosSelecionados: Produto[] = [];
  public servicoSelecionado: number = 0;

  constructor(private produtosService: ProdutosService) {}

  async ngOnInit(): Promise<void> {
    await this.inicializarListaProdutos();
  }

  async inicializarListaProdutos(): Promise<void> {
    const res = await this.produtosService.BuscarTodosComEstoque();
    this.listaProdutos = res;
  }
}
