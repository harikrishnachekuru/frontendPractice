import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class Highlight {

@Input() apphighlight = "Orange";

private el = inject(ElementRef);

@HostListener('mouseenter')
onMouseEnter(){
  this.el.nativeElement.style.backgroundColor = this.apphighlight;
}

@HostListener('mouseleave')
onMouseLeave(){
  this.el.nativeElement.style.backgroundColor = '';
}

}
