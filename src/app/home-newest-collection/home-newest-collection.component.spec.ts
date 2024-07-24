import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeNewestCollectionComponent } from './home-newest-collection.component';

describe('HomeNewestCollectionComponent', () => {
  let component: HomeNewestCollectionComponent;
  let fixture: ComponentFixture<HomeNewestCollectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeNewestCollectionComponent]
    });
    fixture = TestBed.createComponent(HomeNewestCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
