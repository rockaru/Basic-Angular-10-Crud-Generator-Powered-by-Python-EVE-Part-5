import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFisaComponent } from './view-fisa.component';

describe('ViewFisaComponent', () => {
  let component: ViewFisaComponent;
  let fixture: ComponentFixture<ViewFisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
