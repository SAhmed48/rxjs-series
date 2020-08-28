import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addEvent') addEvent: ElementRef;
  eventList: string[] = [];

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.addEvent.nativeElement, 'click').subscribe(
      res => {
        this.eventList.push(`Event ${count++}`);
      });
  }

}
