import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitProdutosComponent } from './kit-produtos.component';

describe('KitProdutosComponent', () => {
  let component: KitProdutosComponent;
  let fixture: ComponentFixture<KitProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
