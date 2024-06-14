import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionlistComponent } from './selectionlist.component';

describe('SelectionlistComponent', () => {
  let component: SelectionlistComponent;
  let fixture: ComponentFixture<SelectionlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectionlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
