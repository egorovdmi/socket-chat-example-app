(window as any).global = window;

import { Injectable } from '@angular/core';
import { ChatEvent } from './events/chat-event';
import io from 'socket.io-client';

const ServiceEndPoint = 'https://demo-chat-server.on.ag';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private socket: any = null;
  private waitUntilConnected: Promise<void>;

  constructor() {
    this.waitUntilConnected = new Promise((resolve) => {
      this.socket = io(ServiceEndPoint, { autoConnect: false });
      this.socket.on('connect', () => {
        this.onConnect();
        resolve();
      });
      this.socket.on('message', data => this.onMessage(data));
      this.socket.on('command', data => this.onCommand(data));
    });

    this.socket.connect();
  }

  sendMessage(event: ChatEvent): void {
    this.waitUntilConnected.then(() => {
      this.socket.emit('message', event);
    });
  }

  sendCommand(): void {
    this.waitUntilConnected.then(() => {
      this.socket.emit('command');
    });
  }

  private onConnect() {
    console.log('connected!');
  }

  private onMessage(data: any) {
    console.log('message', data);
  }

  private onCommand(data: any) {
    console.log('command', data);
  }
}
