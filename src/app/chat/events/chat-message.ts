import { ChatEvent } from './chat-event';

export class ChatMessage implements ChatEvent {
    author: string;
    message: string;

    constructor(author: string, message: string) {
        this.author = author;
        this.message = message;
    }
}
