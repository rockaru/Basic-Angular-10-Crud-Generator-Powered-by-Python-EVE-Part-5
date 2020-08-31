import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewDatetimeComponent } from './mea-view-datetime.component';

describe('MeaViewDatetimeComponent', () => {
  let component: MeaViewDatetimeComponent;
  let fixture: ComponentFixture<MeaViewDatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewDatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
