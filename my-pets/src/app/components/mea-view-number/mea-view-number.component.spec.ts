import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewNumberComponent } from './mea-view-number.component';

describe('MeaViewNumberComponent', () => {
  let component: MeaViewNumberComponent;
  let fixture: ComponentFixture<MeaViewNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
