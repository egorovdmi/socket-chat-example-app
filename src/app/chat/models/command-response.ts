import { ChatMessage } from '../events/chat-message';

export interface CommandResponse {
    commandId: number;
    message: ChatMessage;
}
