import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportingscreenComponent } from './reportingscreen.component';

describe('ReportingscreenComponent', () => {
  let component: ReportingscreenComponent;
  let fixture: ComponentFixture<ReportingscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportingscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportingscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
