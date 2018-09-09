import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ChatEvent } from './events/chat-event';
import { ChatMessage } from './events/chat-message';
import { ChatCommand } from './events/chat-command';
import io from 'socket.io-client';
import { ChatCommandTypes } from './events/commands';

// Put here endpoint as a constant in order to simplify the solution,
// possible to move in the config somewhere in the future.
const ServerHostname = 'https://demo-chat-server.on.ag';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: any = null;
  private waitUntilConnected: Promise<void>;

  public commands = new Subject<ChatCommand>();
  public messages = new Subject<ChatMessage>();

  constructor() {
    this.waitUntilConnected = new Promise((resolve) => {
      this.socket = io(ServerHostname, { autoConnect: false });
      this.socket.on('connect', () => {
        this.onConnect();
        resolve();
      });
      this.socket.on('message', data => this.onMessage(data));
      this.socket.on('command', data => this.onCommand(data));
    });

    this.socket.connect();
  }

  sendMessage(event: ChatMessage): void {
    this.waitUntilConnected.then(() => {
      this.socket.emit('message', event);
    });
  }

  fetchCommand(): void {
    this.waitUntilConnected.then(() => {
      this.socket.emit('command');
    });
  }

  private onConnect() {
    console.log('connected!');
  }

  private onMessage(message: ChatMessage) {
    console.log('message', message);
    message.isResponse = true;
    this.messages.next(message);
  }

  private onCommand(command: ChatCommand) {
    console.log('command', command);
    command.isResponse = true;
    this.commands.next(command);
  }
}
