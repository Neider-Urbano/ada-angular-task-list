import { Component } from '@angular/core';

interface Product {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  products: Product[] = [
    { value: 'option-0', viewValue: 'List' },
    { value: 'option-1', viewValue: 'Create' },
  ];
}
