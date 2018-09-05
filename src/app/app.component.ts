import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ChatActions } from './chat/actions';
import * as fromChat from './chat/reducers/chat.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'socket-chat-example-app';

  constructor(private store: Store<fromChat.State>) {}

  ngOnInit() {
    this.store.dispatch(
      new ChatActions.SendMessage({ author: 'Garry', message: 'Hello!' })
    );
    this.store.dispatch(
      new ChatActions.FetchCommand()
    );
  }
}
