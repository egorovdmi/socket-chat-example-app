import { Component, OnInit } from '@angular/core';
import { ChatService } from './chat/chat.service';
import { ChatMessage } from './chat/events/chat-message';

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
    this.chatService.sendMessage(new ChatMessage('Garry', 'Hello!'));
    this.chatService.sendCommand();
  }
}
