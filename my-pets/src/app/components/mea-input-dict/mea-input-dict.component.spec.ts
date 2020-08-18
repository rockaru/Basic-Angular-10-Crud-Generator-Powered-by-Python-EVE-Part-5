import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputDictComponent } from './mea-input-dict.component';

describe('MeaInputDictComponent', () => {
  let component: MeaInputDictComponent;
  let fixture: ComponentFixture<MeaInputDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
