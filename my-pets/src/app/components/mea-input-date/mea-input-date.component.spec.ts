import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputDateComponent } from './mea-input-date.component';

describe('MeaInputDateComponent', () => {
  let component: MeaInputDateComponent;
  let fixture: ComponentFixture<MeaInputDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
