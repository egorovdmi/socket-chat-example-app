import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChatActions } from './chat/actions';
import * as fromChat from './chat/reducers/chat.reducer';
import { ChatMessage } from './chat/events/chat-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'socket-chat-example-app';

  constructor(private store: Store<fromChat.State>) {}

  ngOnInit() {
    this.store.dispatch(
      new ChatActions.SendMessage(new ChatMessage('Dmitry', 'Hello'))
    );
    this.store.dispatch(
      new ChatActions.FetchCommand()
    );
  }
}
