import { ChatEvent } from './chat-event';
import { CommandsUnion } from './commands';

export interface ChatCommand extends ChatEvent {
    command: CommandsUnion;
}
