import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatService } from 'src/services/chat-service';

@Component({
  selector: 'app-input-bar',
  templateUrl: './input-bar.component.html',
  styleUrls: ['./input-bar.component.scss']
})
export class InputBarComponent implements OnInit {

  chatForm: FormGroup;

  constructor(private chatService: ChatService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.chatForm = this.formBuilder.group({
      message: ['', Validators.required]
    })
  }

  sendMessage() {
    this.chatService.sendMessage(this.chatForm.get('message').value);
  }
}
