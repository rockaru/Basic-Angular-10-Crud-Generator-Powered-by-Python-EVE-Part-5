import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisaComponent } from './fisa.component';

describe('FisaComponent', () => {
  let component: FisaComponent;
  let fixture: ComponentFixture<FisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
