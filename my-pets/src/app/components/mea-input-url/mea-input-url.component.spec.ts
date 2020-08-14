import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputUrlComponent } from './mea-input-url.component';

describe('MeaInputUrlComponent', () => {
  let component: MeaInputUrlComponent;
  let fixture: ComponentFixture<MeaInputUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
