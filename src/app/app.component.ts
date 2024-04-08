import { Component } from '@angular/core';
import { ProductsModel } from './pages/product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public sidebarExpanded = true;
  public loggedIn = false;
  public novosProdutos: ProductsModel[] = [];

  receiveEmitLoggedIn() {
    this.loggedIn = true;
  }

  receiveEmitSignOut(answear: boolean) {
    this.loggedIn = answear;
  }

  receiveProducts(input: ProductsModel[]) {
    this.novosProdutos = input;
    console.log(input);
  }
}
