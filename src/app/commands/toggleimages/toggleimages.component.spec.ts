import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleimagesComponent } from './toggleimages.component';

describe('ToggleimagesComponent', () => {
  let component: ToggleimagesComponent;
  let fixture: ComponentFixture<ToggleimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToggleimagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
