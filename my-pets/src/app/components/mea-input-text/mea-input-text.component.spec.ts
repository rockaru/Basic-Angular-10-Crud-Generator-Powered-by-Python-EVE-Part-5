import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputTextComponent } from './mea-input-text.component';

describe('MeaInputTextComponent', () => {
  let component: MeaInputTextComponent;
  let fixture: ComponentFixture<MeaInputTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
