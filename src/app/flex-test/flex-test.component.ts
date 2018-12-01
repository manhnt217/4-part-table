import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-flex-test',
  templateUrl: './flex-test.component.html',
  styleUrls: ['./flex-test.component.css']
})
export class FlexTestComponent implements OnInit {

  @ViewChild('bottomLeft') bottomLeftRef: ElementRef
  @ViewChild('topLeft') topLeftRef: ElementRef
  @ViewChild('bottomRight') bottomRightRef: ElementRef
  @ViewChild('topRight') topRightRef: ElementRef

  private bottomLeft: HTMLElement;
  private topLeft: HTMLElement;
  private bottomRight: HTMLElement;
  private topRight: HTMLElement;

  constructor() { }

  ngOnInit() {

    this.bottomLeft = this.bottomLeftRef.nativeElement as HTMLElement
    this.topLeft = this.topLeftRef.nativeElement as HTMLElement
    this.bottomRight = this.bottomRightRef.nativeElement as HTMLElement
    this.topRight = this.topRightRef.nativeElement as HTMLElement

  }

  onScroll(event: Event, side: string) {
    const target = event.target as HTMLElement
    switch (side) {
      // case 'top-left':
      //   this.topRight.scrollTop = target.scrollTop
      //   this.bottomLeft.scrollLeft = target.scrollLeft
      //   break;
      case 'bottom-left':
        this.topLeft.scrollLeft = target.scrollLeft
        // this.bottomRight.scrollTop = target.scrollTop
        break;
      case 'top-right':
        this.topLeft.scrollTop = target.scrollTop
        // this.bottomRight.scrollLeft = target.scrollLeft
        break;
      case 'bottom-right':
        this.topRight.scrollLeft = target.scrollLeft
        this.bottomLeft.scrollTop = target.scrollTop
        break;
      default:
        break;
    }
  }

}
