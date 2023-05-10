import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/services/chat-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.sendMessage('User entered!');
  }
}
