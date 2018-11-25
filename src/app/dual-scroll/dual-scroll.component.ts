import { Component, OnInit, ViewChild, ElementRef, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subject, Subscription, Observable } from 'rxjs';
import { map, pairwise, merge } from 'rxjs/operators';

@Component({
  selector: 'app-dual-scroll',
  templateUrl: './dual-scroll.component.html',
  styleUrls: ['./dual-scroll.component.css']
})
export class DualScrollComponent implements OnInit, AfterViewChecked, AfterViewInit, AfterContentChecked, AfterContentInit {

  prefix: Observable<string>;
  array: Array<any>;

  @ViewChild('bottomLeft') bottomLeftRef: ElementRef
  @ViewChild('topLeft') topLeftRef: ElementRef
  @ViewChild('bottomRight') bottomRightRef: ElementRef
  @ViewChild('topRight') topRightRef: ElementRef

  private bottomLeft: HTMLElement;
  private topLeft: HTMLElement;
  private bottomRight: HTMLElement;
  private topRight: HTMLElement;

  leftArray: Observable<any>;
  rightArray: Observable<any>;

  prefixSubject: Subject<string>;
  suffixSubject: Subject<string>;
  currentPfx = '';
  ARRAY_MAX: number = 20;

  constructor(private cdRef: ChangeDetectorRef) {
    this.prefix = new Observable();
    this.prefixSubject = new Subject();
    this.suffixSubject = new Subject();
  }

  ngOnInit() {

    this.bottomLeft = this.bottomLeftRef.nativeElement as HTMLElement
    this.topLeft = this.topLeftRef.nativeElement as HTMLElement
    this.bottomRight = this.bottomRightRef.nativeElement as HTMLElement
    this.topRight = this.topRightRef.nativeElement as HTMLElement

    console.log('ngOnInit')

    this.prefixSubject.pipe(
      // merge(this.prefix),
      // pairwise(),
      map(x => x + this.currentPfx),
    )
      .subscribe(x => this.currentPfx = x)

    this.leftArray = this.prefixSubject.pipe(
      map(_ => this.getArray(this.currentPfx, 'LEFT')),
    )
    this.rightArray = this.prefixSubject.pipe(
      map(_ => this.getArray(this.currentPfx, 'RIGHT')),
    )
  }

  click() {
    this.prefixSubject.next('><==========><')
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

  getArray(prefix: string, name: string): Array<any> {
    console.log('getArray ' + name);
    const a = new Array(this.ARRAY_MAX);

    for (let i = 0; i < a.length; i++) {
      // a[i] = Math.round(Math.random() * 100);
      a[i] = prefix + i;
    }
    return a;
  }

  ngAfterContentInit(): void {
    // console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    // console.log('ngAfterViewInit');
    this.prefixSubject.next('###')
  }

  ngAfterContentChecked(): void {
    // console.log('ngAfterContentChecked');
  }
  ngAfterViewChecked(): void {
    // console.log('ngAfterViewChecked');
  }
}
