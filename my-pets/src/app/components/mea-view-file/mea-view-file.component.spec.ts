import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaViewFileComponent } from './mea-view-file.component';

describe('MeaViewFileComponent', () => {
  let component: MeaViewFileComponent;
  let fixture: ComponentFixture<MeaViewFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaViewFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaViewFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
