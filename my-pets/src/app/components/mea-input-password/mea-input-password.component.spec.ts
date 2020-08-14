import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputPasswordComponent } from './mea-input-password.component';

describe('MeaInputPasswordComponent', () => {
  let component: MeaInputPasswordComponent;
  let fixture: ComponentFixture<MeaInputPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
