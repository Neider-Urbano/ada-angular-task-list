import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOptionsAdvanceComponent } from './filter-options-advance.component';

describe('FilterOptionsAdvanceComponent', () => {
  let component: FilterOptionsAdvanceComponent;
  let fixture: ComponentFixture<FilterOptionsAdvanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterOptionsAdvanceComponent]
    });
    fixture = TestBed.createComponent(FilterOptionsAdvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
