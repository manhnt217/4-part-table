import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-test-rxjs',
  templateUrl: './test-rxjs.component.html',
  styleUrls: ['./test-rxjs.component.css']
})
export class TestRxjsComponent implements OnInit {

  loader: Subject<boolean>;
  data: Subject<string>;

  constructor() { }

  ngOnInit() {

  }

}
