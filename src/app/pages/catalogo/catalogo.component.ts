import { Component, OnInit } from '@angular/core';
import { ProdutosModel } from 'src/app/shared/models/produtos.model';
import { produtosCarrinhoMock } from '../carrinho/carrinho.mock';
import { CategoriasProdutos } from '../produto/array-categorias';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  public produtos: ProdutosModel[] = [];
  public arrayCategorias: string[] = [];
  public categoriasFormGroup: UntypedFormGroup;
  public filtroAtivo = false;
  public produtosFiltrados: ProdutosModel[] = [];
  public produtosCarrinho: ProdutosModel[] = [];

  constructor(fb: FormBuilder) {
    this.categoriasFormGroup = fb.group({
      categoria: [''],
    });
  }

  ngOnInit(): void {
    // this.produtos = produtosMock;
    this.arrayCategorias = CategoriasProdutos;
    this.produtosCarrinho = produtosCarrinhoMock;
  }

  adicionarProdutoNoCarrinho(id: number) {
    const index = this.produtos.findIndex((el) => el.idProdutos === id);
    if (!produtosCarrinhoMock.includes(this.produtos[index])) {
      produtosCarrinhoMock.push(this.produtos[index]);
    }
  }

  filtrarCategoria() {
    let categoria: string = this.categoriasFormGroup.get('categoria')?.value;

    // this.produtosFiltrados = this.produtos.filter(
    //   (el) => el.categoria === categoria
    // );
    if (this.produtosFiltrados.length === 0) {
      this.filtroAtivo = false;
    } else {
      this.filtroAtivo = true;
    }
  }
}
