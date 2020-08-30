import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListObsrvbleComponent } from './observable/list-obsrvble/list-obsrvble.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent,
    children: [
      { path: '', component: ListObsrvbleComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent },
      { path: 'of-from', component: OfFromComponent },
      { path: 'toArray', component: ToArrayComponent },
      { path: 'map', component: MapComponent },
      { path: 'pluck', component: PluckComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RxjsSeriesRoutingModule { }
