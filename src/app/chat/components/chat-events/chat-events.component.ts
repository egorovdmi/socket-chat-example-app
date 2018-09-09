import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatEvent } from '../../events/chat-event';
import { ChatMessage } from '../../events/chat-message';
import { DateCommand, MapCommand, RateCommand, CompleteCommand } from '../../events/commands';
import { ChatCommand } from '../../events/chat-command';
import { CommandResponse } from '../../models/command-response';

@Component({
  selector: 'app-chat-events',
  templateUrl: './chat-events.component.html',
  styleUrls: ['./chat-events.component.css']
})
export class ChatEventsComponent implements OnInit {

  @Input() events: ChatEvent[] = [
    new ChatMessage('Dmitry', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur, quasi pariatur dolorum eveniet praesentium placeat quibusdam cumque vitae ea ad exercitationem temporibus consequuntur eaque deleniti, eos voluptatum qui ipsum.'),
    new ChatMessage('ottonova Bot', 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus tenetur, quasi pariatur dolorum eveniet praesentium placeat quibusdam cumque vitae ea ad exercitationem temporibus consequuntur eaque deleniti, eos voluptatum qui ipsum.', true),
    new ChatCommand('ottonova Bot', true, new DateCommand('2018-09-09T15:57:13.770Z')),
    new ChatCommand('ottonova Bot', true, new MapCommand({ lat: 51.678418, lng: 7.809007 })),
    new ChatCommand('ottonova Bot', true, new RateCommand([1, 5])),
    new ChatCommand('ottonova Bot', true, new CompleteCommand(['Yes', 'No'])),
  ];

  //@Input() events: ChatEvent[] = [];

  @Output() response = new EventEmitter<CommandResponse>();
  @Output() complete = new EventEmitter<CommandResponse>();

  constructor() { }

  ngOnInit() {
  }

  getEventType(event: ChatEvent) {
    const chatCommand = event as ChatCommand;
    return chatCommand.command ? chatCommand.command.type : 'message';
  }
}
