import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketPageItemComponent } from './basket-page-item.component';

describe('BasketPageItemComponent', () => {
  let component: BasketPageItemComponent;
  let fixture: ComponentFixture<BasketPageItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketPageItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketPageItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
