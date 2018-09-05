import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat/chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socket-chat-example-app';

  constructor(private chatService: ChatService) {
  }

  ngOnInit() {
    this.chatService.sendMessage({ author: 'Garry', message: 'Hello!' });
    this.chatService.sendCommand();
  }
}
