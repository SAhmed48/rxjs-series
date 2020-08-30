import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take, retry, retryWhen, delay, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  /**
   * Retry, RetryWhen, Scan and Delay
   * 
   */

  users: any = []; 
  error: string = '';
  status: string = 'No Data';
  fetching: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    
  }


  fetchDetails(){
    this.fetching = true;
    this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(
      //retry(2) // retry request 2 times after failed
      retryWhen(err => err.pipe(
          delay(3000),
          scan((count) => {
            if(count === 5) {
              this.status = 'error fetching on retrying.';
              throw err;
            } else {
              count = count + 1;
              this.status = 'Retrying again...'
              return count;
            }
          },0)
      ))
    )
    .subscribe(res => {
      this.users.push(res[0], res[1], res[2], res[3])
      this.fetching = false;
      this.status = 'Data fetched';
    },
    err => {
      this.fetching = false;
      this.status = 'Error Fetching Data';
      this.error = err.message;
    }
    )
  }
}
