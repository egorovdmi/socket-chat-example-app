import { ChatEvent } from './chat-event';

export interface ChatMessage extends ChatEvent {
    message: string;
}
