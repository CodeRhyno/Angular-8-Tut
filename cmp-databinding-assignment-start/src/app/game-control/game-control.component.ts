import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  startControlVisibility: boolean = false;
  @Output() scoreNumber = new EventEmitter<number>();
  timer;
  score: number = 0;

  constructor() { }

  ngOnInit() {
  }

  changeVisibility(visibilityChange: {visibility: boolean}) {
    if (visibilityChange.visibility) {
      this.timer = setInterval(() => {
        this.scoreNumber.emit(this.score);
        console.log("Emitted: " + this.score);
        this.score += 1;
      }, 1000);
    }
    else {
      clearInterval(this.timer);
    }
    this.startControlVisibility = visibilityChange.visibility;
  }
}
