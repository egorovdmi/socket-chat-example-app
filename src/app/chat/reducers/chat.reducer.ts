import { ChatActions, ChatApiActions } from '../actions';
import { ChatEvent } from '../events/chat-event';

export interface State {
    events: ChatEvent[];
}

const initialState: State = {
    events: [],
};

export function reducer(
    state: State = initialState,
    action: ChatActions.ChatActionsUnion | ChatApiActions.ChatApiActionsUnion
): State {
    switch (action.type) {
        default:
            return state;
    }
}

export const getChatEvents = (state: State) => state.events;
