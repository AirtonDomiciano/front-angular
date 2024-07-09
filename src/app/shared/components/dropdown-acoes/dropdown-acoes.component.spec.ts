import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownAcoesComponent } from './dropdown-acoes.component';

describe('DropdownAcoesComponent', () => {
  let component: DropdownAcoesComponent;
  let fixture: ComponentFixture<DropdownAcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownAcoesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownAcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
