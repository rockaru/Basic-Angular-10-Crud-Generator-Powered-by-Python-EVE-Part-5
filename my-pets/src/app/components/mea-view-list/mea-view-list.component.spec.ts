import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewListComponent } from './mea-view-list.component';

describe('MeaViewListComponent', () => {
  let component: MeaViewListComponent;
  let fixture: ComponentFixture<MeaViewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
