import { Component, OnInit, Input } from '@angular/core';
import { ChatMessage } from '../../events/chat-message';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {
  @Input() event: ChatMessage;

  constructor() { }

  ngOnInit() {
  }
}
