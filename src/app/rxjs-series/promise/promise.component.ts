import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  btnDisable: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  enableBtn(): void {
    this.btnDisable = true;
    let enablePromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 3000);
    });

    enablePromise.then(res => {
      this.btnDisable = false;
    });
  }

}
