import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {
  @Input() visibility: boolean;
  @Output() visibilityOutputStart = new EventEmitter<{visibility: boolean}>();

  constructor() { }

  ngOnInit() {
  }

  changeVisibility() {
    this.visibilityOutputStart.emit({
      visibility: true
    })
  }

}
