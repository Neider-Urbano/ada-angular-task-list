import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCollectionAvailableComponent } from './home-collection-available.component';

describe('HomeCollectionAvailableComponent', () => {
  let component: HomeCollectionAvailableComponent;
  let fixture: ComponentFixture<HomeCollectionAvailableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeCollectionAvailableComponent]
    });
    fixture = TestBed.createComponent(HomeCollectionAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
