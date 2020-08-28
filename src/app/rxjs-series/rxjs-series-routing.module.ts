import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { ListObsrvbleComponent } from './observable/list-obsrvble/list-obsrvble.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';

const routes: Routes = [
  { path: 'promise', component: PromiseComponent },
  { path: 'observable', component: ObservableComponent,
    children: [
      { path: '', component: ListObsrvbleComponent },
      { path: 'from-event', component: FromEventComponent },
      { path: 'interval', component: IntervalComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class RxjsSeriesRoutingModule { }
