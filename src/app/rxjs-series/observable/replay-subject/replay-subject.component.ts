import { Component, OnInit } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {

  _replaySubject = new ReplaySubject<string>(3);

  _userList = [];
  _userList1 = [];

  subscribed = false;

  // Subscription
  _subscription : Subscription;

  constructor() { }

  ngOnInit(): void {
    this._replaySubject.subscribe(res => {
       this._userList.push(res);
    });

  }

  addText(value) {
    this._replaySubject.next(value);
  }

  subscribedUser(){
    if(this.subscribed){
      this._subscription.unsubscribe();
    } else {
      this._subscription = this._replaySubject.subscribe(res => {
        this._userList1.push(res);
      });
    }
    this.subscribed = !this.subscribed;
  }

}
