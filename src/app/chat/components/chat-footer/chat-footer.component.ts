import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.css']
})
export class ChatFooterComponent implements OnInit {
  messageText: string = "";

  constructor() { }

  ngOnInit() {
  }
}
