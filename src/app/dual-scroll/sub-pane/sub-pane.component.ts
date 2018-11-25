import { Component, OnInit, Input, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sub-pane',
  templateUrl: './sub-pane.component.html',
  styleUrls: ['./sub-pane.component.css']
})
export class SubPaneComponent implements OnInit, AfterViewChecked {

  @Input() array: any;
  @Input() name: string

  constructor() { }

  ngOnInit() {
    console.log('child ' + this.name + ' ==== ngOnInit')
  }

  ngAfterViewChecked(): void {
    // console.log('Child check')
  }

  click() {
    console.log('click')
  }
}
