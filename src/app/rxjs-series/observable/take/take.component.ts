import { Component, OnInit } from '@angular/core';
import {from, Subscription, interval, timer} from 'rxjs';
import {take, takeLast, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  /**
   * take,takeLast, takeUntil
   */

  streamSubscription: Subscription;
  takeDataList: string[] = [];
  takeLastList: string[] = [];
  takeUntilList: number[] = [];
  users = ['John', 'Andrew', 'Haier', 'haaris', 'Client', 'Maria', 'Row'];

  constructor() { }

  ngOnInit(): void {

    
    const getUserStream = from(this.users);
    
    // Ex - 01 take
    this.streamSubscription = getUserStream.pipe(
      take(4)
      ).subscribe(res => {
      this.takeDataList.push(res);
    });

    // Ex - 02 takeLast
    this.streamSubscription = getUserStream.pipe(
      takeLast(4)
      ).subscribe(res => {
      this.takeLastList.push(res);
    });


    // Ex - 03 takeUntil

    const source = interval(1500);

    const _observable = timer(5000);

    this.streamSubscription = source.pipe(
      takeUntil(_observable)
      ).subscribe(res => {
      this.takeUntilList.push(+res);
    });
  }

}
