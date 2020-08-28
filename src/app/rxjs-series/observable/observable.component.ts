import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {

  /**
   * Observables Stream types
   * HTTP Request
   * User clicks Events
   * user Inputs
   * Array
   * Object
   * 
   * Observable Handler:
   * Data
   * Error
   * Completion
   * .subscribe(
   *  (data) => (),
   *  (error) => (),
   *  () => (completed)
   * )
   */

  constructor() { }

  ngOnInit(): void {
  }

}
