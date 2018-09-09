import { Component, OnInit, Input } from '@angular/core';
import { MapCommand } from '../../events/commands';

@Component({
  selector: 'app-chat-map-command',
  templateUrl: './chat-map-command.component.html',
  styleUrls: ['./chat-map-command.component.css'],
})
export class ChatMapCommandComponent implements OnInit {
  @Input() command: MapCommand;

  constructor() { }

  ngOnInit() {
  }
}
