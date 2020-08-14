import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputRadioComponent } from './mea-input-radio.component';

describe('MeaInputRadioComponent', () => {
  let component: MeaInputRadioComponent;
  let fixture: ComponentFixture<MeaInputRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
