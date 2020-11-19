import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedHeadingComponent } from './selected-heading.component';

describe('SelectedHeadingComponent', () => {
  let component: SelectedHeadingComponent;
  let fixture: ComponentFixture<SelectedHeadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedHeadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
