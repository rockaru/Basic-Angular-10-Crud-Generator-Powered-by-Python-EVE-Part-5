import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputTimeComponent } from './mea-input-time.component';

describe('MeaInputTimeComponent', () => {
  let component: MeaInputTimeComponent;
  let fixture: ComponentFixture<MeaInputTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
