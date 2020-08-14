import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputCheckboxComponent } from './mea-input-checkbox.component';

describe('MeaInputCheckboxComponent', () => {
  let component: MeaInputCheckboxComponent;
  let fixture: ComponentFixture<MeaInputCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
