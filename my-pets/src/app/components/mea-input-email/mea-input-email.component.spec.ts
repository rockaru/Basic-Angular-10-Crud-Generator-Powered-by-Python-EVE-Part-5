import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputEmailComponent } from './mea-input-email.component';

describe('MeaInputEmailComponent', () => {
  let component: MeaInputEmailComponent;
  let fixture: ComponentFixture<MeaInputEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
