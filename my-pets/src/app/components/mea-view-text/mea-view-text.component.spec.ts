import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewTextComponent } from './mea-view-text.component';

describe('MeaViewTextComponent', () => {
  let component: MeaViewTextComponent;
  let fixture: ComponentFixture<MeaViewTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
