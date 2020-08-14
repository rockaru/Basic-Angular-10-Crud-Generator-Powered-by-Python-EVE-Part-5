import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputListComponent } from './mea-input-list.component';

describe('MeaInputListComponent', () => {
  let component: MeaInputListComponent;
  let fixture: ComponentFixture<MeaInputListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
