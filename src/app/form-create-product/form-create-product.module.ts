import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormCreateProductRoutingModule } from './form-create-product-routing.module';
import { FormCreateProductComponent } from './form-create-product.component';


@NgModule({
  declarations: [
    FormCreateProductComponent
  ],
  imports: [
    CommonModule,
    FormCreateProductRoutingModule
  ]
})
export class FormCreateProductModule { }
