import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNuProductsComponent } from './home-nu-products.component';

describe('HomeNuProductsComponent', () => {
  let component: HomeNuProductsComponent;
  let fixture: ComponentFixture<HomeNuProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNuProductsComponent]
    });
    fixture = TestBed.createComponent(HomeNuProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
