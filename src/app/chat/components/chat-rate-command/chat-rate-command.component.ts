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

  constructor() { }

  ngOnInit() {
  }

  getRateOptions(): number[] {
    // unexpected data
    if (this.command.data.length < 2) {
      return this.command.data;
    }

    // unexpected data
    if (this.command.data[0] > this.command.data[1]) {
      return this.command.data;
    }

    // everything's fine, could continue
    const result = [];
    for (let i = this.command.data[0]; i <= this.command.data[1]; i++) {
      result.push(i);
    }
    return result;
  }
}
