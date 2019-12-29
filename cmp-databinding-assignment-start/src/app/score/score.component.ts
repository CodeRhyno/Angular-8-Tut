import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {
  @Input() score: number;
  oddNumbers: number[];
  evenNumbers: number[];

  constructor() { }

  ngOnInit() {
  }
}
