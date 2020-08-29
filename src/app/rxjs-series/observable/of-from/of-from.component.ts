import { Component, OnInit } from '@angular/core';
import { of, Subscription, from} from 'rxjs';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  eventList: string[] = [];
  stringList: string[] = [];
  welcomeString = 'Welcome to Rxjs Series.';
  eventSubscription: Subscription;
  promiseResult: string = '';

  constructor() { }

  ngOnInit(): void {

    // of operator
    const observableStream = of('1', '2', '3', '4', '5');
    this.eventSubscription = observableStream.subscribe(
      res => {
        this.eventList.push(`${res}`);
      }
    )


    // From Example using Promise
    const promiseObservable = from(this.promiseFnc());
    promiseObservable.subscribe(
      res => {
         this.promiseResult = `${res}`;
      }
    )

    // String to observable Example.
    const stringToObservable = from(this.welcomeString);
    stringToObservable.subscribe(
      res => {
        this.stringList.push(`${res}`)
      }
    )

  }

  promiseFnc(){
    return new Promise(resolve => {
      setTimeout(() => { 
        resolve('Promise Resolved');
      }, 3000);
    });
  }

}
