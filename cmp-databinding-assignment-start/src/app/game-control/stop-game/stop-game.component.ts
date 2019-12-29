import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stop-game',
  templateUrl: './stop-game.component.html',
  styleUrls: ['./stop-game.component.css']
})
export class StopGameComponent implements OnInit {
  @Input() visibility: boolean;
  @Output() visibilityOutputStop = new EventEmitter<{visibility: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  changeVisibility() {
    this.visibilityOutputStop.emit({
      visibility: false
    })
  }

}
