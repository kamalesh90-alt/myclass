import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagetoogleComponent } from './imagetoogle.component';

describe('ImagetoogleComponent', () => {
  let component: ImagetoogleComponent;
  let fixture: ComponentFixture<ImagetoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImagetoogleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagetoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
