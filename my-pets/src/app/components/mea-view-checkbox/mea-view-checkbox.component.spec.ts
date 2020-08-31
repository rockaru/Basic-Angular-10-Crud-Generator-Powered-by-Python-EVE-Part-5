import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewCheckboxComponent } from './mea-view-checkbox.component';

describe('MeaViewCheckboxComponent', () => {
  let component: MeaViewCheckboxComponent;
  let fixture: ComponentFixture<MeaViewCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
