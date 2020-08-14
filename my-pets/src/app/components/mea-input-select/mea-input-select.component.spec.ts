import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputSelectComponent } from './mea-input-select.component';

describe('MeaInputSelectComponent', () => {
  let component: MeaInputSelectComponent;
  let fixture: ComponentFixture<MeaInputSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
