import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ChatActions } from '../../actions';
import { ChatMessage } from '../../events/chat-message';
import { ChatEvent } from '../../events/chat-event';
import * as fromRoot from '../../../reducers';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  events: Observable<ChatEvent[]>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.events = this.store.pipe(select(fromRoot.getChatEvents));
  }

  onFetchCommand(message: string) {
    this.store.dispatch(new ChatActions.FetchCommand());
  }

  onSendMessage(message: string) {
    // TODO: use real credentials
    this.store.dispatch(new ChatActions.SendMessage(new ChatMessage('Dmitry', message)));
  }
}
