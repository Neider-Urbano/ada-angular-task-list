import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, from, map } from 'rxjs';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit, OnDestroy {
  visible = false;
  private productsFrom$: Observable<any>;

  constructor(private productsService: ProductsService) {
    this.productsFrom$ = from(this.productsService.products);
  }

  ngOnInit(): void {
    this.productsFrom$
      .pipe(map((data) => data))
      .subscribe((data) => console.log(data));
    this.visible = this.products.length > 0;
  }

  ngOnDestroy(): void {
    this.productsService.clearProducts();
  }

  get products(): Array<Product> {
    return this.productsService.products;
  }
}
