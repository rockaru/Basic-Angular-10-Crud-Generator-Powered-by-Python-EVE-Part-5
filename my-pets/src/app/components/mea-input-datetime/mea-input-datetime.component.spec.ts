import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputDatetimeComponent } from './mea-input-datetime.component';

describe('MeaInputDatetimeComponent', () => {
  let component: MeaInputDatetimeComponent;
  let fixture: ComponentFixture<MeaInputDatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputDatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
