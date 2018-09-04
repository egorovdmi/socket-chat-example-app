import { ChatCommand } from './chat-command';

export class DateCommand implements ChatCommand<string> {
    author: string;
    command: { type: string; data: string; };
}
