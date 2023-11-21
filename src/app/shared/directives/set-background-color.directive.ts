import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appSetBackgroundColor]'
})
export class SetBackgroundColorDirective implements OnInit {

  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = '#5cb85c';
  }

}
