import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  /**
   * Use cases of Tap Operator.
   * Mostly used on api calls response using Pipe.
   * console.log(Data)
   * console.log(reponse)
   * Change property Value
   * Emit value in observable
   * Perform any other action
   * Does not effect any action
   */

  streamSubscription: Subscription;
  dataPrint: string[] = [];
  loggingList: string[] = [];
  users = ['John', 'Andrew', 'Haier', 'haaris', 'Client', 'Maria', 'Row'];

  constructor() { }

  ngOnInit(): void {

    const getUserStream = interval(1500);

    this.streamSubscription = getUserStream.pipe(
      tap(res => {
        this.loggingList.push(`Before Response Logging => ${res}`);
        if(res == this.users.length){
          this.streamSubscription.unsubscribe();
        }
      }),
      map(res => this.users[res]),
      tap(res => {
        this.loggingList.push(`After Subscribe Logging => ${res}`);
      }))
      .subscribe(res => {
      this.dataPrint.push(res);
    })
  }

}
