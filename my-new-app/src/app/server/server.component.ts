import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server = 'A';
  serverId = 10;
  serverStatus = true;
  getServerStatus() {
    return this.serverStatus;
  }
  constructor() { }

  ngOnInit() {
  }

}
