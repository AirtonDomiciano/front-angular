import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentoComponent } from './atendimento.component';

describe('CatalogoComponent', () => {
  let component: AtendimentoComponent;
  let fixture: ComponentFixture<AtendimentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtendimentoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AtendimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
