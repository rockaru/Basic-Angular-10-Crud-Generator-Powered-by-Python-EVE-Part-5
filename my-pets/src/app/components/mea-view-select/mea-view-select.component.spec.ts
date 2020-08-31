import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewSelectComponent } from './mea-view-select.component';

describe('MeaViewSelectComponent', () => {
  let component: MeaViewSelectComponent;
  let fixture: ComponentFixture<MeaViewSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
