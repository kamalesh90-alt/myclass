import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirevativeComponent } from './direvative.component';

describe('DirevativeComponent', () => {
  let component: DirevativeComponent;
  let fixture: ComponentFixture<DirevativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DirevativeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirevativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
