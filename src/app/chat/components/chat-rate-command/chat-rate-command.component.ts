import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RateCommand } from '../../events/commands';

@Component({
  selector: 'app-chat-rate-command',
  templateUrl: './chat-rate-command.component.html',
  styleUrls: ['./chat-rate-command.component.css']
})
export class ChatRateCommandComponent implements OnInit {
  @Input() command: RateCommand;
  @Output() response = new EventEmitter<string>();

  rateValues = [1,2,3,4,5];

  constructor() { }

  ngOnInit() {
  }
}
