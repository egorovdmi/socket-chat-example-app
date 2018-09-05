import { Action } from '@ngrx/store';
import { ChatMessage } from '../events/chat-message';
import { CommandsUnion } from '../events/commands';

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

    constructor(public payload: CommandsUnion) {}
}

export type ChatApiActionsUnion = ReceivedMessage | ReceivedCommand;
