import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, AfterViewChecked } from '@angular/core';
import { ChatEvent } from '../../events/chat-event';
// import { ChatMessage } from '../../events/chat-message';
// import { DateCommand, MapCommand, RateCommand, CompleteCommand } from '../../events/commands';
import { ChatCommand } from '../../events/chat-command';
import { CommandResponse } from '../../models/command-response';
import { ChatMessage } from '../../events/chat-message';

@Component({
  selector: 'app-chat-events',
  templateUrl: './chat-events.component.html',
  styleUrls: ['./chat-events.component.css']
})
export class ChatEventsComponent implements OnInit, AfterViewChecked {

  // TODO: Remove below code.
  // @Input() events: ChatEvent[] = [
  //   new ChatMessage('Dmitry', 'Lorem, ipsum dolor sit amet.'),
  //   new ChatMessage('ottonova Bot', 'Lorem, ipsum dolor sit.', true),
  //   new ChatCommand('ottonova Bot', true, new DateCommand('2018-09-09T15:57:13.770Z')),
  //   new ChatCommand('ottonova Bot', true, new MapCommand({ lat: 51.678418, lng: 7.809007 })),
  //   new ChatCommand('ottonova Bot', true, new RateCommand([1, 5])),
  //   new ChatCommand('ottonova Bot', true, new CompleteCommand(['Yes', 'No'])),
  // ];

  @Input() events: ChatEvent[];
  @Input() isCompleted = false;
  @Output() response = new EventEmitter<CommandResponse>();
  @Output() complete = new EventEmitter<CommandResponse>();
  @ViewChild('overflowArea') overflowArea: ElementRef<HTMLDivElement>;

  constructor() { }

  ngOnInit() {
  }

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
