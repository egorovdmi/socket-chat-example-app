import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { ChatEvent } from '../../events/chat-event';
import { ChatCommand } from '../../events/chat-command';
import { CommandResponse } from '../../models/command-response';

@Component({
  selector: 'app-chat-events',
  templateUrl: './chat-events.component.html',
  styleUrls: ['./chat-events.component.css']
})
export class ChatEventsComponent implements AfterViewChecked {

  @Input() events: ChatEvent[];
  @Input() isCompleted = false;
  @Output() response = new EventEmitter<CommandResponse>();
  @Output() complete = new EventEmitter<CommandResponse>();
  @ViewChild('overflowArea') overflowArea: ElementRef<HTMLDivElement>;

  ngAfterViewChecked() {
    this.overflowArea.nativeElement.scrollTo(0, this.overflowArea.nativeElement.scrollHeight);
  }

  getEventType(event: ChatEvent) {
    const chatCommand = event as ChatCommand;
    return chatCommand.command ? chatCommand.command.type : 'message';
  }

  onResponse(id: number, message: string) {
    if (!this.isCompleted) {
      this.response.emit(new CommandResponse(id, message));
    }
  }

  onComplete(id: number, message: string) {
    if (!this.isCompleted) {
      this.complete.emit(new CommandResponse(id, message));
    }
  }
}
