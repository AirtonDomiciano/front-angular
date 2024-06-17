import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectProdutosComponent } from './multi-select-produtos.component';

describe('MultiSelectProdutosComponent', () => {
  let component: MultiSelectProdutosComponent;
  let fixture: ComponentFixture<MultiSelectProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiSelectProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiSelectProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
