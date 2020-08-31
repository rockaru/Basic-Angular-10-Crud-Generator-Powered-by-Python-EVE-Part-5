import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewDictComponent } from './mea-view-dict.component';

describe('MeaViewDictComponent', () => {
  let component: MeaViewDictComponent;
  let fixture: ComponentFixture<MeaViewDictComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewDictComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewDictComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
