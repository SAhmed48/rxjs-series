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
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetryComponent } from './observable/retry/retry.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SubjectBehavoirComponent } from './observable/subject-behavoir/subject-behavoir.component';
import { ReplaySubjectComponent } from './observable/replay-subject/replay-subject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatMergeComponent } from './observable/concat-merge/concat-merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { ConcatMapFlattenComponent } from './observable/concat-map-flatten/concat-map-flatten.component';
import { ConcatMapMobileNotifyComponent } from './observable/concat-map-mobile-notify/concat-map-mobile-notify.component';
import { SwitchMapSearchComponent } from './observable/switch-map-search/switch-map-search.component';

@NgModule({
  declarations: [PromiseComponent, ObservableComponent, ListObsrvbleComponent, FromEventComponent, IntervalComponent, OfFromComponent, ToArrayComponent, MapComponent, PluckComponent, TapComponent, TakeComponent, RetryComponent, DebounceComponent, ConcatMapComponent, SubjectBehavoirComponent, ReplaySubjectComponent, AsyncSubjectComponent, ConcatMergeComponent, MergeMapComponent, SwitchMapComponent, ConcatMapFlattenComponent, ConcatMapMobileNotifyComponent, SwitchMapSearchComponent],
  imports: [
  CommonModule,
    MatToolbarModule,
    SharedModuleModule,
    RxjsSeriesRoutingModule
  ]
})
export class RxjsSeriesModule { }
