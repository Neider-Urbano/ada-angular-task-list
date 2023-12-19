import { Injectable } from '@angular/core';
import initListProducts from './initListProducts';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private listProducts: Array<Product> = [];

  constructor() {}

  get products(): Array<Product> {
    let existingProducts = localStorage.getItem('products');
    if (existingProducts) {
      this.listProducts = JSON.parse(existingProducts);
    } else {
      localStorage.setItem('products', JSON.stringify(initListProducts));
      this.listProducts = initListProducts;
    }
    return this.listProducts;
  }

  addProduct(product: Product): string {
    localStorage.setItem(
      'products',
      JSON.stringify([...this.listProducts, product])
    );
    return 'Add Product ';
  }

  deleteProduct(idProduct: number): string {
    this.listProducts = this.listProducts.filter(
      (product) => product.id !== idProduct
    );
    localStorage.setItem('products', JSON.stringify(this.listProducts));
    return 'Delete Product';
  }

  clearProducts(): string {
    localStorage.removeItem('products');
    return 'Clean Products';
  }

  getProductId(idProduct: number): Product | undefined {
    return this.listProducts.find((product) => product.id === idProduct);
  }

  updateProduct(idProduct: number, updateProduct: Product): string {
    this.listProducts = this.listProducts.filter((product) => {
      if (product.id === idProduct) {
        return { ...product, updateProduct };
      }
      return product;
    });

    localStorage.setItem('products', JSON.stringify(this.listProducts));
    return 'Update Product';
  }
}
