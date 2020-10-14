import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  
  allowNewServer = false;
  serverCreationStatus = 'The server is waiting to be connected';
  serverDisconnectionStatus = 'The server is waiting to be disconnected';
  serverName = '';

  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
    
  }
  onCreateStatus(){
    this.serverCreationStatus = 'Server has been created and the name is ' + this.serverName;
  }
  onDisconnectStatus(){
    this.serverDisconnectionStatus = 'You have disconnected the server';
    this.serverCreationStatus = 'The server is waiting to be connected';
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }
}
