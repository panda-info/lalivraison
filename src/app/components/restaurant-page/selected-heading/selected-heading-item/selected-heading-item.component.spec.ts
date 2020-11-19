import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHeadingItemComponent } from './selected-heading-item.component';

describe('SelectedHeadingItemComponent', () => {
  let component: SelectedHeadingItemComponent;
  let fixture: ComponentFixture<SelectedHeadingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedHeadingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHeadingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
