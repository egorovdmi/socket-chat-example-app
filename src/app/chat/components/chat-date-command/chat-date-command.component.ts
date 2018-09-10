import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { DateCommand } from '../../events/commands';

const sunday = 0;
const saturday = 6;
const workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

@Component({
  selector: 'app-chat-date-command',
  templateUrl: './chat-date-command.component.html',
  styleUrls: ['./chat-date-command.component.css']
})
export class ChatDateCommandComponent {
  @Input() command: DateCommand;
  @Output() response = new EventEmitter<string>();

  getDays(isoDateString: string): string[] {
    const date = new Date(isoDateString);
    const day = date.getDay();

    if (day === sunday || day === saturday) {
      return workingDays;
    }

    const result = workingDays.slice(day - 1);
    result.push(...workingDays.slice(0, workingDays.length - result.length));

    return result;
  }
}
