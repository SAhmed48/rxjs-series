import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RxjsSeriesModule } from './rxjs-series/rxjs-series.module';
import { RxjsSeriesRoutingModule } from './rxjs-series/rxjs-series-routing.module';
import { SharedModuleModule } from './shared-module/shared-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
  BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    BrowserAnimationsModule,
    FormsModule,
    RxjsSeriesRoutingModule,
    RxjsSeriesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
