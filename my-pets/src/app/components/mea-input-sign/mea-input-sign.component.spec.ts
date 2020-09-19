import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputSignComponent } from './mea-input-sign.component';

describe('MeaInputSignComponent', () => {
  let component: MeaInputSignComponent;
  let fixture: ComponentFixture<MeaInputSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
