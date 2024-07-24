import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeCollectionAvailableComponent } from '../home-collection-available/home-collection-available.component';

@NgModule({
  declarations: [HomeComponent, HomeCollectionAvailableComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
