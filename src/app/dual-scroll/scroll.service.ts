import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class ScrollService {

  scrollSubject: Subject<{ srcSide: string, scrollTop: number, scrollLeft: number }>

  constructor() {
    this.scrollSubject = new Subject()
  }

}
