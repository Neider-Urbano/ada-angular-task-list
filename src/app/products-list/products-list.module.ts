import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { FilterOptionsBasicComponent } from '../filter-options-basic/filter-options-basic.component';
import { FilterOptionsAdvanceComponent } from '../filter-options-advance/filter-options-advance.component';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductStyleDirective } from '../product-card/product-style.directive';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FirstCharacterMayusPipe } from './first-character-mayus.pipe';
@NgModule({
  declarations: [
    ProductsListComponent,
    FilterOptionsBasicComponent,
    FilterOptionsAdvanceComponent,
    ProductCardComponent,
    ProductStyleDirective,
    FirstCharacterMayusPipe,
  ],
  imports: [
    CommonModule,
    ProductsListRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
})
export class ProductsListModule {}
