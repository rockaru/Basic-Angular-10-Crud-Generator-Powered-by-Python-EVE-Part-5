import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewDualListComponent } from './mea-view-dual-list.component';

describe('MeaViewDualListComponent', () => {
  let component: MeaViewDualListComponent;
  let fixture: ComponentFixture<MeaViewDualListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewDualListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewDualListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
