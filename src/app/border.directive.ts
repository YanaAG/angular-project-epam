import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective {
  @Input() damage: number;
  el: ElementRef;
  renderer: Renderer2;

  constructor(el: ElementRef, renderer: Renderer2) {
    this.el = el;
    this.renderer = renderer;
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit() {
    if (this.damage > 50) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '10px solid red');
    }
  }
}
