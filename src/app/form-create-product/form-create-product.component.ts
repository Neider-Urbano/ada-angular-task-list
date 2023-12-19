import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ProductsService } from '../services/products.service';

enum CategoryProduct {
  'sneakers',
}

type FormGroupProduct = {
  urlImg: string;
  title: string;
  ratingInitial: number;
  previewPrice: number;
  newPrice: number;
  company: string;
  color: string;
  category: CategoryProduct;
};
@Component({
  selector: 'app-form-create-product',
  templateUrl: './form-create-product.component.html',
  styleUrls: ['./form-create-product.component.css'],
})
export class FormCreateProductComponent {
  formGroupProduct: FormGroup;

  private validCategory = (control: AbstractControl) => {
    const category = control.value;
    let error = null;
    const isRequiredCategory =
      this.formGroupProduct?.get('category')?.errors?.['required'];
    if (!isRequiredCategory && !category.includes('sneakers')) {
      error = { categoryInvalid: true };
    }
    return error;
  };

  constructor(
    private _builder: FormBuilder,
    private productsService: ProductsService
  ) {
    this.formGroupProduct = this._builder.group({
      urlImg: ['', [Validators.required, Validators.minLength(10)]],
      title: ['', [Validators.required, Validators.minLength(3)]],
      ratingInitial: [
        '',
        [Validators.required, Validators.max(10), Validators.min(0)],
      ],
      previewPrice: ['', [Validators.required, Validators.max(100000)]],
      newPrice: ['', [Validators.required, Validators.min(50000)]],
      company: ['', [Validators.required, Validators.minLength(3)]],
      color: ['', Validators.required],
      category: ['', [Validators.required, this.validCategory]],
    });
  }

  onSubmit(form: FormGroupProduct) {
    console.log(form);
    if (this.formGroupProduct.valid) {
      alert(`Product Create`);
      this.addProduct(form);
      this.formGroupProduct.reset();
    } else {
      alert('Product Invalid');
    }
  }

  addProduct(product: any): void {
    this.productsService.addProduct(product);
  }
}
