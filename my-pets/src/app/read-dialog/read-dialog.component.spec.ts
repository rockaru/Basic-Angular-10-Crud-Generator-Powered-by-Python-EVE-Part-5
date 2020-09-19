import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadDialogComponent } from './read-dialog.component';

describe('ReadDialogComponent', () => {
  let component: ReadDialogComponent;
  let fixture: ComponentFixture<ReadDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
