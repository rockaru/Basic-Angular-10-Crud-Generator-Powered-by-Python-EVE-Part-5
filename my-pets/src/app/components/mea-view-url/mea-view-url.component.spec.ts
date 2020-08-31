import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewUrlComponent } from './mea-view-url.component';

describe('MeaViewUrlComponent', () => {
  let component: MeaViewUrlComponent;
  let fixture: ComponentFixture<MeaViewUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
