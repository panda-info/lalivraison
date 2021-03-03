import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasketItemDialogComponent } from './basket-item-dialog.component';

describe('BasketItemDialogComponent', () => {
  let component: BasketItemDialogComponent;
  let fixture: ComponentFixture<BasketItemDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketItemDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
