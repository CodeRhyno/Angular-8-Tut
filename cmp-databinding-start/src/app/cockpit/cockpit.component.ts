import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput) {
    const name: string = nameInput.value;
    this.serverCreated.emit({
      // serverName: this.newServerName,
      serverName: name, 
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput) {
    const name: string = nameInput.value;
    this.blueprintCreated.emit({
      // serverName: this.newServerName, 
      serverName: name, 
      // serverContent: this.newServerContent
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}

// For Angular 8
// @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;
