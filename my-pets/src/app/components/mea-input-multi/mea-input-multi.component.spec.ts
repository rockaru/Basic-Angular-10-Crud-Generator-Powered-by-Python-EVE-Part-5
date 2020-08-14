import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputMultiComponent } from './mea-input-multi.component';

describe('MeaInputMultiComponent', () => {
  let component: MeaInputMultiComponent;
  let fixture: ComponentFixture<MeaInputMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
