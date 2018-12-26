import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestMouseComponent } from './test-mouse/test-mouse.component';
import { DualScrollComponent } from './dual-scroll/dual-scroll.component';
import { SubPaneComponent } from './dual-scroll/sub-pane/sub-pane.component';
import { MouseWheelDirective } from './mouse-wheel-directive';
import { FlexTestComponent } from './flex-test/flex-test.component';
import { ScrollObservableComponent } from './scroll-observable/scroll-observable.component';
import { ScrollService } from './dual-scroll/scroll.service';
import { SpreadsheetTestComponent } from './spreadsheet-test/spreadsheet-test.component';
import { TestRxjsComponent } from './test-rxjs/test-rxjs.component';
import { DynamicComponent } from './dynamic/dynamic.component';

@NgModule({
  declarations: [
    AppComponent,
    TestMouseComponent,
    DualScrollComponent,
    SubPaneComponent,
    MouseWheelDirective,
    FlexTestComponent,
    ScrollObservableComponent,
    SpreadsheetTestComponent,
    TestRxjsComponent,
    DynamicComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ScrollService],
  bootstrap: [AppComponent],
  entryComponents: [TestRxjsComponent]
})
export class AppModule { }
