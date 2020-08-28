import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'rxjs', loadChildren: () => import('../app/rxjs-series/rxjs-series.module').then(m => m.RxjsSeriesModule)},
  {path: '**', redirectTo: 'rxjs/promise'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
