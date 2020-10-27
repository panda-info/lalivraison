import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutZoneComponent } from './about-zone.component';

describe('AboutZoneComponent', () => {
  let component: AboutZoneComponent;
  let fixture: ComponentFixture<AboutZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
