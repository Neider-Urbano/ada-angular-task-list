import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterOptionsBasicComponent } from './filter-options-basic.component';

describe('FilterOptionsBasicComponent', () => {
  let component: FilterOptionsBasicComponent;
  let fixture: ComponentFixture<FilterOptionsBasicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterOptionsBasicComponent]
    });
    fixture = TestBed.createComponent(FilterOptionsBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
