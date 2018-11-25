import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-mouse',
  templateUrl: './test-mouse.component.html',
  styleUrls: ['./test-mouse.component.css']
})
export class TestMouseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  click(e: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
    console.log('click')
  }
  mouseUp(e: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
    console.log('mouseUp')
  }
  mouseDown(e: Event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    event.preventDefault();
    console.log('mouseDown')
  }

  childClick(e: Event) {
    console.log('childClick')
  }
}
