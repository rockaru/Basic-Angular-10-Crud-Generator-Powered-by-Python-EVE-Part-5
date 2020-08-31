import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputComboComponent } from './mea-input-combo.component';

describe('MeaInputComboComponent', () => {
  let component: MeaInputComboComponent;
  let fixture: ComponentFixture<MeaInputComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
