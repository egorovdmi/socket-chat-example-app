import { Action } from '@ngrx/store';
import { ChatMessage } from '../events/chat-message';
import { CommandResponse } from '../models/command-response';

export enum ChatActionTypes {
  SendMessage = '[Chat] Send message',
  FetchCommand = '[Chat] Fetch command',
  SendCommandResponse = '[Chat] Send command response',
}

export class SendMessage implements Action {
  readonly type = ChatActionTypes.SendMessage;

  constructor(public payload: ChatMessage) {}
}

export class FetchCommand implements Action {
    readonly type = ChatActionTypes.FetchCommand;
}

export class SendCommandResponse implements Action {
  readonly type = ChatActionTypes.SendCommandResponse;

  constructor(public payload: CommandResponse) {}
}

export type ChatActionsUnion = SendMessage | FetchCommand | SendCommandResponse;
