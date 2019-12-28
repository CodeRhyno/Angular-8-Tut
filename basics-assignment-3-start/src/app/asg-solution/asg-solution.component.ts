import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asg-solution',
  templateUrl: './asg-solution.component.html',
  styleUrls: ['./asg-solution.component.css']
})
export class AsgSolutionComponent implements OnInit {
  displayStatus = true;
  logs = [];
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  getLogs() {
    return this.logs;
  }
  onDetailsButtonClick() {
    console.log('Button CLicked!');
    this.counter += 1;
    this.displayStatus = !this.displayStatus;
    if (this.counter <= 4) {
      this.logs.push(false);
    }
    else {
      this.logs.push(true);
    }
    console.log(this.logs);
  }

}
