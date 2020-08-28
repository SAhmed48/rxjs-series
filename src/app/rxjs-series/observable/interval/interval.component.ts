import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  eventList: string[] = [];
  eventSubscription: Subscription;

  constructor() { }

  ngOnInit(): void {

    // Interval 

    // const broadCastingEvents = interval(3000);
    // this.eventSubscription = broadCastingEvents.subscribe(
    //   res => {
    //     this.eventList.push(`Event ${res}`);

    //     if(this.eventList.length === 5){
    //       this.eventSubscription.unsubscribe();
    //     }
    //   }
    // )

    // Timer Example

    // timer(delay, interval)
    const timerBroadCasting = timer(3000, 1000);
    this.eventSubscription = timerBroadCasting.subscribe(
      res => {
        this.eventList.push(`Event ${res}`);

        if(this.eventList.length === 5){
          this.eventSubscription.unsubscribe();
        }
      }
    )

  }

}
