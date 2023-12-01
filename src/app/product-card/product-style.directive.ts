import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appProductStyle]',
})
export class ProductStyleDirective {
  @Input() productTitle: string | undefined = undefined;

  constructor(private elRef: ElementRef) {}

  ngOnInit() {
    const title = this.getLengthTitle(this.productTitle);
    if (title !== 0) {
      this.elRef.nativeElement.style.color = 'black';
    }
  }

  getLengthTitle(text: string | undefined): number {
    if (text) {
      return text.length;
    } else {
      return 0;
    }
  }
}
