import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewTelComponent } from './mea-view-tel.component';

describe('MeaViewTelComponent', () => {
  let component: MeaViewTelComponent;
  let fixture: ComponentFixture<MeaViewTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
