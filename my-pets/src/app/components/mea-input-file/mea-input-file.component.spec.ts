import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaInputFileComponent } from './mea-input-file.component';

describe('MeaInputFileComponent', () => {
  let component: MeaInputFileComponent;
  let fixture: ComponentFixture<MeaInputFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeaInputFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeaInputFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
