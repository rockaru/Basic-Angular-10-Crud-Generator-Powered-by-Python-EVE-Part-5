import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputNumberComponent } from './mea-input-number.component';

describe('MeaInputNumberComponent', () => {
  let component: MeaInputNumberComponent;
  let fixture: ComponentFixture<MeaInputNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
