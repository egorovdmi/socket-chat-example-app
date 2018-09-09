import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {
  messageText = '';
  chatElements = [];
  days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  lat: number = 51.678418;
  lng: number = 7.809007;
  rateValues = [1,2,3,4,5];
  complete = ['Yes', 'No'];

  constructor() { }

  ngOnInit() {
    this.chatElements.length = 1;
    this.chatElements.fill(new Date());
  }

  onDay(day) {
    alert(day);
  }

}
