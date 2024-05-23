import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdutosModel } from '../produtos/model/produtos.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/services/produtos.service';
import { ResBuscarPorId } from '../produtos/model/res-buscar-por-id.interface';
import { ProdutosInterface } from '../produtos/model/produtos.interface';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss'],
})
export class ProdutoComponent implements OnInit {
  public formGroup: FormGroup;
  public id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {
    this.formGroup = this.fb.group({
      nomeProduto: ['', Validators.required],
      qtdeTotal: ['', Validators.required],
      imagem: ['', Validators.required],
      valor: ['', Validators.required],
    });
  }

  async ngOnInit(): Promise<void> {
    this.formGroup.controls['nomeProduto'].setValidators([Validators.required]);
    this.formGroup.controls['qtdeTotal'].setValidators([Validators.required]);
    this.formGroup.controls['imagem'].setValidators([Validators.required]);
    this.formGroup.controls['valor'].setValidators([Validators.required]);

    if (this.id) {
      const res: ResBuscarPorId = await this.produtosService.BuscarProdutoPorId(
        this.id
      );

      const produto = res.produto;

      this.formGroup.controls['nomeProduto'].setValue(produto.nomeProduto);
      this.formGroup.controls['qtdeTotal'].setValue(produto.qtdeTotal);
      this.formGroup.controls['imagem'].setValue(produto.imagem);
      this.formGroup.controls['valor'].setValue(produto.valor);
    }
  }

  onSubmit() {
    let input: ProdutosInterface = this.formGroup.value;
    const validation: boolean = this.validationSave(this.formGroup.value);
    if (this.id) {
      if (validation) {
        input.ativo = true;
        this.produtosService.EditarProduto(this.id, input);
        this.router.navigate([`private/produtos`]);
      }
      return;
    }
    if (validation) {
      input.ativo = true;
      this.produtosService.CriarProduto(input);
      this.router.navigate([`private/produtos`]);
    }
  }

  validationSave(input: ProdutosModel): boolean {
    let validation = true;

    if (
      !input.qtdeTotal ||
      !input.imagem ||
      !input.nomeProduto ||
      !input.valor
    ) {
      validation = false;
    }

    return validation;
  }
}
