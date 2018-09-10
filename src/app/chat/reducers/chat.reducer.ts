import { ChatActions, ChatApiActions } from '../actions';
import { ChatEvent } from '../events/chat-event';
import { ChatMessage } from '../events/chat-message';
import * as AuthActions from '../../auth/actions';

export interface State {
    events: ChatEvent[];
    isCompleted: boolean;
}

const initialState: State = {
    events: [],
    isCompleted: false,
};

export function reducer(
    state: State = initialState,
    action: ChatActions.ChatActionsUnion | ChatApiActions.ChatApiActionsUnion | AuthActions.AuthActionsUnion
): State {
    switch (action.type) {
        case ChatActions.ChatActionTypes.SendMessage:
        case ChatApiActions.ChatApiActionTypes.ReceivedMessage:
        case ChatApiActions.ChatApiActionTypes.ReceivedCommand:
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        case ChatActions.ChatActionTypes.SendCommandResponse: {
            const events = [...state.events];
            events[action.payload.eventId] =
                new ChatMessage(action.payload.author, action.payload.message, true);
            return {
                ...state,
                events: events
            };
        }
        case ChatActions.ChatActionTypes.Complete:
            return {
                ...state,
                isCompleted: true
            };
        case AuthActions.AuthActionTypes.SignOut:
            return {
                ...initialState
            };
        default:
            return state;
    }
}

export const getChatEvents = (state: State) => state.events;
export const getIsCompleted = (state: State) => state.isCompleted;
