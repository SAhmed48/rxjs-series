import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  eventList: string[] = [];
  numericTableList: string[] = [];
  subscribeBroadCast: Subscription;
  subscribeBroadCast1: Subscription;

  constructor() { }

  ngOnInit(): void {

    const broadCastData = interval(2000);

    /// Ex - 01
    this.subscribeBroadCast = broadCastData.pipe(
      map(data => `Transformed Data => ${data}`)
    ).subscribe(res => {
      this.eventList.push(res);

      if(this.eventList.length === 6){
         this.subscribeBroadCast.unsubscribe();
      }
    });

    // Ex - 02
    this.subscribeBroadCast1 = broadCastData.pipe(
      map(data => `2 * ${data} => ${+data * 2}`)
    ).subscribe(res => {
      this.numericTableList.push(res);

      if(this.numericTableList.length === 11){
         this.subscribeBroadCast1.unsubscribe();
      }
    });


  }

}
