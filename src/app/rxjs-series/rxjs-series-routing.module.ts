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
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { ConcatMapFlattenComponent } from './observable/concat-map-flatten/concat-map-flatten.component';
import { ConcatMapMobileNotifyComponent } from './observable/concat-map-mobile-notify/concat-map-mobile-notify.component';
import { ConcatMergeComponent } from './observable/concat-merge/concat-merge.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { RetryComponent } from './observable/retry/retry.component';
import { SubjectBehavoirComponent } from './observable/subject-behavoir/subject-behavoir.component';
import { TakeComponent } from './observable/take/take.component';
import { TapComponent } from './observable/tap/tap.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { SwitchMapSearchComponent } from './observable/switch-map-search/switch-map-search.component';


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

      { path: 'async-subject', component: AsyncSubjectComponent },
      { path: 'concat-map', component: ConcatMapComponent },
      { path: 'concat-map-flatten', component: ConcatMapFlattenComponent },
      { path: 'concat-map-mobile', component: ConcatMapMobileNotifyComponent },
      { path: 'concat-merge', component: ConcatMergeComponent },
      { path: 'debounce-time', component: DebounceComponent },
      { path: 'merge-map', component: MergeMapComponent },
      { path: 'replay-subject', component: ReplaySubjectComponent },
      { path: 'retry', component: RetryComponent },
      { path: 'subject', component: SubjectBehavoirComponent },
      { path: 'take', component: TakeComponent },
      { path: 'tap', component: TapComponent },
      { path: 'switch-map', component: SwitchMapComponent },
      { path: 'switch-map-search', component: SwitchMapSearchComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class RxjsSeriesRoutingModule { }
