import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OneComponent } from './exercises/one/one.component';
import { TwoComponent } from './exercises/two/two.component';
import { ThreeComponent } from './exercises/three/three.component';
import { ThreeRowComponent } from './exercises/three-row/three-row.component';
import { FourComponent } from './exercises/four/four.component';
import { FiveComponent } from './exercises/five/five.component';
import { SixComponent } from './exercises/six/six.component';
import { SevenComponent } from './exercises/seven/seven.component';
import { EightComponent } from './exercises/eight/eight.component';
import { NineComponent } from './exercises/nine/nine.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ThreeComponent,
    ThreeRowComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    EightComponent,
    NineComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
