import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-test-mouse',
  templateUrl: './test-mouse.component.html',
  styleUrls: ['./test-mouse.component.css']
})
export class TestMouseComponent implements OnInit {

  @ViewChild('bar') bar: ElementRef

  constructor(private self: ElementRef) { }

  ngOnInit() {
  }

  click(e: MouseEvent) {
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    // event.preventDefault();
    console.log('click')
  }

  mouseUp(e: MouseEvent) {
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    // event.preventDefault();
    console.log('mouseUp')
  }

  mouseDown(e: MouseEvent) {
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    // event.preventDefault();
    console.log('mouseDown');
    (this.bar.nativeElement as HTMLElement).style.left = e.clientX - (this.self.nativeElement as HTMLElement).offsetLeft + 'px';
    // e.target.addEventListener('mousemove', );
  }

  mouseMove(e: MouseEvent) {
    // event.stopPropagation();
    // event.stopImmediatePropagation();
    // event.preventDefault();
    (this.bar.nativeElement as HTMLElement).style.left = e.clientX - (this.self.nativeElement as HTMLElement).offsetLeft + 'px';
  }

  childClick(e: MouseEvent) {
    console.log('childClick')
  }
}
