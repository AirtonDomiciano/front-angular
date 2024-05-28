import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTelefoneComponent } from './input-telefone.component';

describe('InputTelefoneComponent', () => {
  let component: InputTelefoneComponent;
  let fixture: ComponentFixture<InputTelefoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputTelefoneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputTelefoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
