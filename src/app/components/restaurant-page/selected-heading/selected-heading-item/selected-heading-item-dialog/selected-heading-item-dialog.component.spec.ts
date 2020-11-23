import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHeadingItemDialogComponent } from './selected-heading-item-dialog.component';

describe('SelectedHeadingItemDialogComponent', () => {
  let component: SelectedHeadingItemDialogComponent;
  let fixture: ComponentFixture<SelectedHeadingItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedHeadingItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHeadingItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
