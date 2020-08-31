import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewImageComponent } from './mea-view-image.component';

describe('MeaViewImageComponent', () => {
  let component: MeaViewImageComponent;
  let fixture: ComponentFixture<MeaViewImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
