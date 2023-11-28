import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCreateProductRoutingModule } from './form-create-product-routing.module';
import { FormCreateProductComponent } from './form-create-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormCreateProductComponent],
  imports: [CommonModule, FormCreateProductRoutingModule, ReactiveFormsModule],
})
export class FormCreateProductModule {}
