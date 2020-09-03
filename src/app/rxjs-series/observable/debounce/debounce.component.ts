import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit, AfterViewInit {

  @ViewChild('distinctUntilInput') distinctUntilInput: ElementRef;
  @ViewChild('debounceInput') debounceInput: ElementRef;

  searchData: string = '';
  searchData1: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const debounceEvent = fromEvent<any>(this.debounceInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value ),
      debounceTime(500)
    );
    debounceEvent.subscribe(res => {
      this.searchData = res;
    });


    //Ex -02
    const distinctUntil = fromEvent<any>(this.distinctUntilInput.nativeElement, 'keyup').pipe(
      map(event => event.target.value ),
      debounceTime(500),
      distinctUntilChanged()
    );
    distinctUntil.subscribe(res => {
      this.searchData1 = res;
    });
  }

}
