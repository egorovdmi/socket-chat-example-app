import { Action } from '@ngrx/store';
import { ChatMessage } from '../events/chat-message';
import { ChatCommand } from '../events/chat-command';

export enum ChatApiActionTypes {
  ReceivedMessage = '[Chat/API] Received message',
  ReceivedCommand = '[Chat/API] Received command',
}

export class ReceivedMessage implements Action {
  readonly type = ChatApiActionTypes.ReceivedMessage;

  constructor(public payload: ChatMessage) {}
}

export class ReceivedCommand implements Action {
    readonly type = ChatApiActionTypes.ReceivedCommand;

    constructor(public payload: ChatCommand) {}
}

export type ChatApiActionsUnion = ReceivedMessage | ReceivedCommand;
