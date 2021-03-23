import { Component } from '@angular/core';
import { SocketService } from './socket.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messageList:  string[] = [];
  obs: Observable<object>;

  constructor(private socketService: SocketService) {
  }

  sendMessage(message: HTMLInputElement) {
    this.socketService.sendMessage(message.value);

    console.log("sent: " + message.value)
    message.value="";
  }
  ngOnInit() {
    this.obs = this.socketService.getMessage();
    this.obs.subscribe(this.rcvMessage);
  }
  rcvMessage = (message: string) => {
        this.messageList.push(message);
        console.log("messagereceived: " + message)
      }

}




