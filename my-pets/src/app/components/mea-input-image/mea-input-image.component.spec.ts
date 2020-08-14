import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputImageComponent } from './mea-input-image.component';

describe('MeaInputImageComponent', () => {
  let component: MeaInputImageComponent;
  let fixture: ComponentFixture<MeaInputImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
