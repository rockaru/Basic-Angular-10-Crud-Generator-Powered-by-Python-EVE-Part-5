import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewRadioComponent } from './mea-view-radio.component';

describe('MeaViewRadioComponent', () => {
  let component: MeaViewRadioComponent;
  let fixture: ComponentFixture<MeaViewRadioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewRadioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewRadioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
