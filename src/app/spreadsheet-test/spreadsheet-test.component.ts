import { Component, OnInit } from '@angular/core';
declare var gapi: any;
declare var gapiPromise: any;

@Component({
  selector: 'app-spreadsheet-test',
  templateUrl: './spreadsheet-test.component.html',
  styleUrls: ['./spreadsheet-test.component.css']
})
export class SpreadsheetTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    gapiPromise.then(() => {
      console.log(gapi.auth2);
    });
  }

}
