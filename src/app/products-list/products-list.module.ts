import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { FilterOptionsBasicComponent } from '../filter-options-basic/filter-options-basic.component';
import { FilterOptionsAdvanceComponent } from '../filter-options-advance/filter-options-advance.component';

@NgModule({
  declarations: [
    ProductsListComponent,
    FilterOptionsBasicComponent,
    FilterOptionsAdvanceComponent,
  ],
  imports: [CommonModule, ProductsListRoutingModule],
})
export class ProductsListModule {}
