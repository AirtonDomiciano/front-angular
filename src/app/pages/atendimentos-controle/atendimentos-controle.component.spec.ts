import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendimentosControleComponent } from './atendimentos-controle.component';

describe('AtendimentosControleComponent', () => {
  let component: AtendimentosControleComponent;
  let fixture: ComponentFixture<AtendimentosControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendimentosControleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendimentosControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
