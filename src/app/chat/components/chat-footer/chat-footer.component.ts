import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.css']
})
export class ChatFooterComponent implements OnInit {
  @Input() isCompleted: boolean;
  @Output() message = new EventEmitter<string>();
  @Output() command = new EventEmitter<string>();

  messageText = '';

  constructor() { }

  ngOnInit() {
  }

  onMessage(sender: HTMLElement) {
    sender.style.display = 'none';
    this.sendMessage();
  }

  onCommand(sender: HTMLElement) {
    sender.style.display = 'none';

    if (this.isCompleted) {
      return;
    }

    this.command.emit(this.messageText);
    this.messageText = '';
  }

  onEnter() {
    if (!this.sendMessage() && !this.isCompleted) {
      this.command.emit(this.messageText);
    }
  }

  sendMessage(): boolean {
    if (this.messageText.length === 0 || this.isCompleted) {
      return false;
    }

    this.message.emit(this.messageText);
    this.messageText = '';
    return true;
  }
}
