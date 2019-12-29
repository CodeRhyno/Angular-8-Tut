import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-even-score',
  templateUrl: './even-score.component.html',
  styleUrls: ['./even-score.component.css']
})
export class EvenScoreComponent implements OnInit {
  @Input() score: number;
  
  constructor() { }

  ngOnInit() {
  }

}
