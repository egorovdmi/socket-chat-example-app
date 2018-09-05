import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';

import { ChatService } from '../chat.service';
import { ChatActions } from '../actions/index';

@Injectable()
export class ChatEffects {
    @Effect({ dispatch: false })
    sendMessage$ = this.actions$.pipe(
        ofType<ChatActions.SendMessage>(ChatActions.ChatActionTypes.SendMessage),
        map(action => action.payload),
        tap(message => this.chatService.sendMessage(message))
    );

    @Effect({ dispatch: false })
    fetchMessage$ = this.actions$.pipe(
        ofType<ChatActions.FetchCommand>(ChatActions.ChatActionTypes.FetchCommand),
        tap(message => this.chatService.fetchCommand())
    );

    constructor(
        private actions$: Actions,
        private chatService: ChatService
    ) { }
}
