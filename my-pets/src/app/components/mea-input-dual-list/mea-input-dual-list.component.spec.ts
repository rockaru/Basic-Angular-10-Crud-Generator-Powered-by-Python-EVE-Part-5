import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputDualListComponent } from './mea-input-dual-list.component';

describe('MeaInputDualListComponent', () => {
  let component: MeaInputDualListComponent;
  let fixture: ComponentFixture<MeaInputDualListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputDualListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputDualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
