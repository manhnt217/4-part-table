import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { TestRxjsComponent } from '../test-rxjs/test-rxjs.component';
import { Util } from './util';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  @ViewChild('entry1', {read: ViewContainerRef}) entry1: ViewContainerRef
  @ViewChild('entry2', {read: ViewContainerRef}) entry2: ViewContainerRef

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  onClick(): void {
    const comp = Util.showPopup(this.entry1, TestRxjsComponent, this.resolver);
    setTimeout(() => {
      comp.destroy();
    }, 1000);
  }
}
