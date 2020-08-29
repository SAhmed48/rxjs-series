import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';

import { RxjsSeriesRoutingModule } from './rxjs-series-routing.module';
import { PromiseComponent } from './promise/promise.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ObservableComponent } from './observable/observable.component';
import { ListObsrvbleComponent } from './observable/list-obsrvble/list-obsrvble.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';

@NgModule({
  declarations: [PromiseComponent, ObservableComponent, ListObsrvbleComponent, FromEventComponent, IntervalComponent, OfFromComponent],
  imports: [
  CommonModule,
    MatToolbarModule,
    SharedModuleModule,
    RxjsSeriesRoutingModule
  ]
})
export class RxjsSeriesModule { }
