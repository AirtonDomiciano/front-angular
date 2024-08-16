import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplementoComponent } from './complemento.component';

describe('ComplementoComponent', () => {
  let component: ComplementoComponent;
  let fixture: ComponentFixture<ComplementoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplementoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComplementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
