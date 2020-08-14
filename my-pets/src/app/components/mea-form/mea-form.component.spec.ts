import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaFormComponent } from './mea-form.component';

describe('MeaFormComponent', () => {
  let component: MeaFormComponent;
  let fixture: ComponentFixture<MeaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
