import { ChatActions, ChatApiActions } from '../actions';
import { ChatEvent } from '../events/chat-event';

export interface State {
    events: ChatEvent[];
    completed: boolean;
}

const initialState: State = {
    events: [],
    completed: false,
};

export function reducer(
    state: State = initialState,
    action: ChatActions.ChatActionsUnion | ChatApiActions.ChatApiActionsUnion
): State {
    switch (action.type) {
        case ChatActions.ChatActionTypes.SendMessage:
        case ChatApiActions.ChatApiActionTypes.ReceivedMessage:
        case ChatApiActions.ChatApiActionTypes.ReceivedCommand:
            return {
                ...state,
                events: [...state.events, action.payload]
            };
        default:
            return state;
    }
}

export const getChatEvents = (state: State) => state.events;
