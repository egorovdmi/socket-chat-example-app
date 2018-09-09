import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DateCommand } from '../../events/commands';

@Component({
  selector: 'app-chat-date-command',
  templateUrl: './chat-date-command.component.html',
  styleUrls: ['./chat-date-command.component.css']
})
export class ChatDateCommandComponent implements OnInit {
  @Input() command: DateCommand;
  @Output() response = new EventEmitter<string>();

  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

  constructor() { }

  ngOnInit() {
  }
}
