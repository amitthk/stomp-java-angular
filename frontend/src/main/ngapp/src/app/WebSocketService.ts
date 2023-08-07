import { Injectable } from '@angular/core';
import { Client, StompConfig, StompService } from '@stomp/ng2-stompjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private stompClient: Client;

  constructor(private stompService: StompService) {
    const stompConfig: StompConfig = {
      url: 'ws://localhost:8080/ws', // Replace with your Spring Boot WebSocket URL
      headers: {
        login: 'guest',
        passcode: 'guest'
      },
      heartbeat_in: 0,
      heartbeat_out: 20000,
      reconnect_delay: 5000,
      debug: true
    };
    this.stompClient = this.stompService.initAndConnect(stompConfig);
  }

  // Implement methods to subscribe, send, and receive WebSocket messages
  // For example:
  subscribe(topic: string, callback: (message: string) => void): void {
    this.stompClient.subscribe(topic, callback);
  }

  sendMessage(destination: string, body: any): void {
    this.stompClient.publish({ destination, body });
  }
}
