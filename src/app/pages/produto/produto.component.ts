import { Component } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProdutosModel } from '../produtos/model/produtos.model';
import { produtosMock } from '../produtos/produtos.mock';
import { Router } from '@angular/router';
import { CategoriasProdutos } from './array-categorias';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent {
  public formGroup: UntypedFormGroup;
  public precoIsWrong: boolean = false;
  public semCategoria: boolean = false;
  public semNome: boolean = false;
  public semDescricao: boolean = false;
  public semPreco: boolean = false;
  public semImagem: boolean = false;
  public categorias = CategoriasProdutos;

  constructor(private fb: FormBuilder, private router: Router) {
    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required],
      imagem: ['', Validators.required],
    });
  }

  onSubmit() {
    let input: ProdutosModel = this.formGroup.value;
    this.precoIsWrong = false;
    this.semCategoria = false;
    this.semNome = false;
    this.semDescricao = false;
    this.semPreco = false;
    this.semImagem = false;
    const validation: boolean = this.validationSave(this.formGroup.value);
    if (validation) {
      if (produtosMock.length < 1) {
        input.idProdutos = 1;
      } else {
        let newId = produtosMock[produtosMock.length - 1].idProdutos! + 1;
        input.idProdutos = newId;
      }
      let indexCategoria = this.categorias.findIndex(
        (el) => el === input.categoria
      );

      if (indexCategoria === -1) {
        let newCategoria: string;
        newCategoria = input.categoria.charAt(0).toUpperCase();
        newCategoria += input.categoria.slice(1);
        CategoriasProdutos.push(newCategoria);
      }
      produtosMock.push(input);
      this.router.navigate([`produtos`]);
    }
  }

  validationSave(input: ProdutosModel): boolean {
    let validation = true;

    if (input.categoria === '') {
      this.semCategoria = true;
      validation = false;
    }

    if (input.preco <= 0) {
      this.precoIsWrong = true;
      validation = false;
    }

    if (input.nome.length === 0) {
      this.semNome = true;
      validation = false;
    }

    if (input.preco === undefined) {
      this.semPreco = true;
      validation = false;
    }

    if (input.descricao.length === 0) {
      this.semDescricao = true;
      validation = false;
    }

    if (input.imagem.length === 0) {
      this.semImagem = true;
      validation = false;
    }

    return validation;
  }
}
