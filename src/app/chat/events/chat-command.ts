import { ChatEvent } from './chat-event';
import { CommandsUnion } from './commands';

export class ChatCommand implements ChatEvent {
    constructor(
        public author: string,
        public isResponse: boolean,
        public command: CommandsUnion) {}
}
