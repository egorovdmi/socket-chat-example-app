import { ChatEvent } from './chat-event';

export class ChatMessage implements ChatEvent {
    constructor (
        public author: string, 
        public message: string, 
        public isResponse: boolean = false) {}
}
