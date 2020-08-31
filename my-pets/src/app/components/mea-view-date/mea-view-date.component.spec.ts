import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewDateComponent } from './mea-view-date.component';

describe('MeaViewDateComponent', () => {
  let component: MeaViewDateComponent;
  let fixture: ComponentFixture<MeaViewDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
