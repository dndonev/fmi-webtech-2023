import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable, Subscription } from 'rxjs';
import { ChatService } from 'src/services/chat-service';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit, OnDestroy {

  messages: string[] = [];
  subscription: Subscription;

  constructor(private chatService: ChatService, private socket: Socket) { }

  ngOnInit(): void {
    this.socket.on('message', (message: string) => {
      this.messages.push(message);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
