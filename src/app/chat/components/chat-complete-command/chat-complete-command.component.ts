import { Component, Input, EventEmitter, Output } from '@angular/core';
import { CompleteCommand } from '../../events/commands';

@Component({
  selector: 'app-chat-complete-command',
  templateUrl: './chat-complete-command.component.html',
  styleUrls: ['./chat-complete-command.component.css']
})
export class ChatCompleteCommandComponent {
  @Input() command: CompleteCommand;
  @Output() response = new EventEmitter<string>();
}
