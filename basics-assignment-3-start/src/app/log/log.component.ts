import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  message: string = 'Button Clicked!';
  date: Date;
  classGreen: boolean = false;

  @Input() log: boolean;

  constructor() {
    this.date = new Date((new Date()).getTime());
    console.log(this.log);
    if (this.log) {
      this.classGreen = true;
    }
  }

  ngOnInit() {
  }
}
