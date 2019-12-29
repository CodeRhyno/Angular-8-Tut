import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newScore: number;
  oddScores: number[] = [];
  evenScores: number[] = [];

  scoreChanged(score: number) {
    console.log("+++++++++++++++");
    console.log(score);
    console.log("+++++++++++++++");
    this.newScore = score;
    if (score%2 == 0) {
      this.evenScores.push(score);
    }
    else {
      this.oddScores.push(score);
    }
  }
}
