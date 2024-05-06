import { Component, OnInit } from '@angular/core';
import { ShoppingInterface } from '../shopping/models/shopping-interface';
import { ShoppingMock } from '../shopping/models/shopping.mock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss'],
})
export class ViewOrderComponent implements OnInit {
  public produtosComprados!: ShoppingInterface;
  public id = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const index = ShoppingMock.findIndex((el) => el.id === this.id);
    this.produtosComprados = ShoppingMock[index];
    console.log(this.produtosComprados);
  }
}
