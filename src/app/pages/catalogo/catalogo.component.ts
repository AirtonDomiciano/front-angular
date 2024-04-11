import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { produtosMock } from '../product/product.mock';
import { ProductsModel } from '../product/product.model';
import { produtosCarrinhoMock } from '../carrinho/carrinho.mock';
import { CategoriasProdutos } from '../product-register/array-categorias';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss'],
})
export class CatalogoComponent implements OnInit {
  public produtos: ProductsModel[] = [];
  public arrayCategorias: string[] = [];
  public categoriasFormGroup: UntypedFormGroup;
  public filtroAtivo = false;
  public produtosFiltrados: ProductsModel[] = [];

  constructor(fb: FormBuilder) {
    this.categoriasFormGroup = fb.group({
      categoria: [''],
    });
  }

  ngOnInit(): void {
    this.produtos = produtosMock;
    this.arrayCategorias = CategoriasProdutos;
  }

  adicionarProdutoNoCarrinho(id: number) {
    const index = this.produtos.findIndex((el) => el.id === id);
    produtosCarrinhoMock.push(this.produtos[index]);
  }

  filtrarCategoria() {
    let categoria: string = this.categoriasFormGroup.get('categoria')?.value;

    this.produtosFiltrados = this.produtos.filter(
      (el) => el.categoria === categoria
    );
    if (this.produtosFiltrados.length === 0) {
      this.filtroAtivo = false;
    } else {
      this.filtroAtivo = true;
    }
  }
}
