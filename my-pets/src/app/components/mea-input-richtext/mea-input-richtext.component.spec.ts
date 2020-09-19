import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputRichtextComponent } from './mea-input-richtext.component';

describe('MeaInputRichtextComponent', () => {
  let component: MeaInputRichtextComponent;
  let fixture: ComponentFixture<MeaInputRichtextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputRichtextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputRichtextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
