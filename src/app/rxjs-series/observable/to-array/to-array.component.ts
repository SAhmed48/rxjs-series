import { Component, OnInit } from '@angular/core';
import { take, toArray } from 'rxjs/operators';
import { interval, pipe, from } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  constructor() { }

  responseInHtml: number[] = [];

  users = [
    {name: 't1', value:'abc'},
    {name: 't2', value:'abd'},
    {name: 't3', value:'abe'},
    {name: 't4', value:'abr'},
    {name: 't5', value:'abt'},
  ]

  printUser = [];

  ngOnInit(): void {

    const source1 = interval(2000);

    source1.pipe(
      take(7),
      toArray()
    ).subscribe(res => {
      this.responseInHtml = res;
      console.log(res);
    });

    // Example 2
    const source2 = from(this.users);

    source2.pipe(
      toArray()
    ).subscribe(res => {
      this.printUser = res;
      console.log('print',res);
    });

  }

}
