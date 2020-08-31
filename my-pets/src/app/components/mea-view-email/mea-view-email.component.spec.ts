import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewEmailComponent } from './mea-view-email.component';

describe('MeaViewEmailComponent', () => {
  let component: MeaViewEmailComponent;
  let fixture: ComponentFixture<MeaViewEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
