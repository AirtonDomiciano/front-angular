import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { ProdutosModel } from '../produtos/model/produtos.model';
import { produtosMock } from '../produtos/produtos.mock';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  public formGroup: UntypedFormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));
  public precoIsWrong: boolean = false;
  public semCategoria: boolean = false;
  public semNome: boolean = false;
  public semDescricao: boolean = false;
  public semPreco: boolean = false;
  public semImagem: boolean = false;

  public index = produtosMock.findIndex((el) => el.idProdutos === this.id);

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      preco: ['', Validators.required],
      descricao: ['', Validators.required],
      imagem: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    if (this.id) {
      const produto: ProdutosModel = produtosMock[this.index];

      this.formGroup = this.fb.group(produto);

      this.formGroup.controls['nome'].setValidators([Validators.required]);
      this.formGroup.controls['categoria'].setValidators([Validators.required]);
      this.formGroup.controls['preco'].setValidators([Validators.required]);
      this.formGroup.controls['descricao'].setValidators([Validators.required]);
    }
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
    if (this.id) {
      if (this.formGroup.valid) {
        let input: ProdutosModel = this.formGroup.value;

        produtosMock[this.index] = input;
        this.router.navigate([`private/produtos`]);
      }
      return;
    }
    if (validation) {
      if (produtosMock.length < 1) {
        input.idProdutos = 1;
      } else {
        let newId = produtosMock[produtosMock.length - 1].idProdutos! + 1;
        input.idProdutos = newId;
      }
      produtosMock.push(input);
      this.router.navigate([`private/produtos`]);
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
