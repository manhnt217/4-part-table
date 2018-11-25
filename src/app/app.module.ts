import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestMouseComponent } from './test-mouse/test-mouse.component';
import { DualScrollComponent } from './dual-scroll/dual-scroll.component';
import { SubPaneComponent } from './dual-scroll/sub-pane/sub-pane.component';
import { MouseWheelDirective } from './mouse-wheel-directive';
import { FlexTestComponent } from './flex-test/flex-test.component';

@NgModule({
  declarations: [
    AppComponent,
    TestMouseComponent,
    DualScrollComponent,
    SubPaneComponent,
    MouseWheelDirective,
    FlexTestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
