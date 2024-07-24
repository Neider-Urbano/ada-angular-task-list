import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Product {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  products: Product[] = [
    { value: 'option-0', viewValue: 'List' },
    { value: 'option-1', viewValue: 'Create' },
  ];

  ngOnInit() {
    const scrollDiv = document.getElementById('container-header');

    function changeColorOnScroll() {
      if (scrollDiv) {
        if (window.scrollY > 115) {
          scrollDiv.classList.add('active');
        } else {
          scrollDiv.classList.remove('active');
        }
      }
    }

    window.addEventListener('scroll', changeColorOnScroll);
  }
}
