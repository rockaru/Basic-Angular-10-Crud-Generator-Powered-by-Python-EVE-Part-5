import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputTelComponent } from './mea-input-tel.component';

describe('MeaInputTelComponent', () => {
  let component: MeaInputTelComponent;
  let fixture: ComponentFixture<MeaInputTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
