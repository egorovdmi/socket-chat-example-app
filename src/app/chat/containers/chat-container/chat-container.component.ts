import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ChatActions } from '../../actions';
import { ChatMessage } from '../../events/chat-message';
import { ChatEvent } from '../../events/chat-event';
import { CommandResponse } from '../../models/command-response';
import * as fromRoot from '../../../reducers';
import { take, tap } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.css']
})
export class ChatContainerComponent implements OnInit {

  events: Observable<ChatEvent[]>;
  isCompleted: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
    this.events = this.store.pipe(select(fromRoot.getChatEvents));
    this.isCompleted = this.store.pipe(select(fromRoot.getChatIsCompleted));
  }

  onFetchCommand(message: string) {
    this.store.dispatch(new ChatActions.FetchCommand());
  }

  onSendMessage(message: string) {
    this.store.pipe(
      select(fromRoot.getLogin),
      take(1),
    ).subscribe(login =>
      this.store.dispatch(new ChatActions.SendMessage(new ChatMessage(login, message)))
    );
  }

  onResponse(response: CommandResponse) {
    this.store.pipe(
      select(fromRoot.getLogin),
      take(1),
    ).subscribe(login => {
      response.author = login;
      this.store.dispatch(new ChatActions.SendCommandResponse(response));
    });
  }

  onComplete(response: CommandResponse) {
    this.store.pipe(
      select(fromRoot.getLogin),
      take(1),
    ).subscribe(login => {
      response.author = login;
      this.store.dispatch(new ChatActions.SendCommandResponse(response));

      if (response.message === 'Yes') {
        this.store.dispatch(new ChatActions.Complete());
      }
    });
  }
}
