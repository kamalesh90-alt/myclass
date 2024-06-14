import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypieComponent } from './mypie.component';

describe('MypieComponent', () => {
  let component: MypieComponent;
  let fixture: ComponentFixture<MypieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MypieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MypieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
