import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsscreenComponent } from './settingsscreen.component';

describe('SettingsscreenComponent', () => {
  let component: SettingsscreenComponent;
  let fixture: ComponentFixture<SettingsscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsscreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
