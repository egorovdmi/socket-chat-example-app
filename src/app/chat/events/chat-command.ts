import { ChatEvent } from './chat-event';

export interface ChatCommand<T> extends ChatEvent {
    command: {
        type: string;
        data: T;
    };
}
