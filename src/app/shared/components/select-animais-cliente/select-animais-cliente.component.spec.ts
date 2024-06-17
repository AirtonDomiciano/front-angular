import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAnimaisClienteComponent } from './select-animais-cliente.component';

describe('SelectAnimaisClienteComponent', () => {
  let component: SelectAnimaisClienteComponent;
  let fixture: ComponentFixture<SelectAnimaisClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAnimaisClienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectAnimaisClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
