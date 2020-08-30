import { Component, OnInit } from '@angular/core';
import { from, Subscription } from 'rxjs';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  // get single property from object.

  streamSubscription: Subscription;
  dataPrint: string[] = [];
  users = [
    {
      name: 'John',
      skill: 'typer'
    },
    {
      name: 'John 1',
      skill: 'typer'
    },
    {
      name: 'John 2',
      skill: 'typer'
    },
    {
      name: 'John 3',
      skill: 'typer'
    },
    {
      name: 'John 4',
      skill: 'typer'
    },
    {
      name: 'John 5',
      skill: 'typer'
    },
  ];

  constructor() { }

  ngOnInit(): void {

    const getUserStream = from(this.users);

    this.streamSubscription = getUserStream.pipe(
      pluck('name'),
      toArray()
    ).subscribe(res => {
      console.log(res);
      this.dataPrint = res;
    })

  }

}
