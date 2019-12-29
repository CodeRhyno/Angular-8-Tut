import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-odd-score',
  templateUrl: './odd-score.component.html',
  styleUrls: ['./odd-score.component.css']
})
export class OddScoreComponent implements OnInit {
  @Input() score: number;

  constructor() { }

  ngOnInit() {
  }

}
