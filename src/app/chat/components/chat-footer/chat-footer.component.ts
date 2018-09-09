import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.css']
})
export class ChatFooterComponent implements OnInit {
  @Output() message = new EventEmitter<string>();
  @Output() command = new EventEmitter<string>();

  messageText = '';

  constructor() { }

  ngOnInit() {
  }

  onMessage(sender: HTMLElement) {
    sender.style.display = 'none';
    this.message.emit(this.messageText);
    this.messageText = '';
  }

  onCommand(sender: HTMLElement) {
    sender.style.display = 'none';
    this.command.emit(this.messageText);
    this.messageText = '';
  }

  onEnter() {
    if (this.messageText.length > 0) {
      this.message.emit(this.messageText);
      this.messageText = '';
    } else {
      this.command.emit(this.messageText);
    }
  }
}
