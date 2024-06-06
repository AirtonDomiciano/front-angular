import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUfsComponent } from './select-ufs.component';

describe('SelectUfsComponent', () => {
  let component: SelectUfsComponent;
  let fixture: ComponentFixture<SelectUfsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectUfsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectUfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
