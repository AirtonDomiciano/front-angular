import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectCidadesComponent } from './select-cidades.component';

describe('SelectCidadesComponent', () => {
  let component: SelectCidadesComponent;
  let fixture: ComponentFixture<SelectCidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectCidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectCidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
