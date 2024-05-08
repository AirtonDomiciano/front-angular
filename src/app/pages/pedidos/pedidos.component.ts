import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ComprasInterface } from '../compras/models/compras-interface';
import { ComprasMock } from '../compras/models/compras.mock';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
})
export class PedidosComponent implements OnInit {
  public produtosComprados!: ComprasInterface;
  public id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const index = ComprasMock.findIndex((el: any) => el.id === this.id);
    this.produtosComprados = ComprasMock[index];
    console.log(this.produtosComprados);
  }
}
