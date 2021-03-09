import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelivrerPageComponent } from './delivrer-page.component';

describe('DelivrerPageComponent', () => {
  let component: DelivrerPageComponent;
  let fixture: ComponentFixture<DelivrerPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelivrerPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelivrerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
