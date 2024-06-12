import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectClientesComponent } from './select-clientes.component';

describe('SelectClientesComponent', () => {
  let component: SelectClientesComponent;
  let fixture: ComponentFixture<SelectClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectClientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
