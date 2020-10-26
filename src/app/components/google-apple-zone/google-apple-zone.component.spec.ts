import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleAppleZoneComponent } from './google-apple-zone.component';

describe('GoogleAppleZoneComponent', () => {
  let component: GoogleAppleZoneComponent;
  let fixture: ComponentFixture<GoogleAppleZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleAppleZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleAppleZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
