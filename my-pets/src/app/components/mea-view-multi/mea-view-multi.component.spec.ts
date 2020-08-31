import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewMultiComponent } from './mea-view-multi.component';

describe('MeaViewMultiComponent', () => {
  let component: MeaViewMultiComponent;
  let fixture: ComponentFixture<MeaViewMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
