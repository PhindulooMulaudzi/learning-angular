import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appHover]',
})
export class HoverDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() color: string = 'red';

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      this.color
    );
  }

  @HostListener('mouseleave') onMouseLeve() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundColor',
      'white'
    );
  }

  ngOnInit(): void {
    // this.element.nativeElement.style.backgroundColor = this.color;
    // this.renderer.setStyle(
    //   this.element.nativeElement,
    //   'backgroundColor',
    //   this.color
    // );
  }
}
