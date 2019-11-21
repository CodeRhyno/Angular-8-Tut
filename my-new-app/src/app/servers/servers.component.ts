import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  username = '';
  serverCreated = false;
  constructor() { setTimeout(() => {
      this.allowNewServer = true; }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name: ' + this.serverName;
    this.serverCreated = true;
  }

  onDestroyServer() {
    this.serverCreationStatus = 'Server was destroyed!';
  }

  onUpdateServerName(event) {
    this.serverName = (event.target as HTMLInputElement).value;
  }

  resetUsername() {
    this.username = '';
  }

}
