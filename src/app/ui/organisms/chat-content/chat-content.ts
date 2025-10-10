import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Avatar } from '@app/ui/atoms/avatar/avatar';
import { InputBox } from '@app/ui/molecules/input-box/input-box';
import { MessageBubble } from '@app/ui/molecules/message-bubble/message-bubble';

export interface Message {
  text: string;
  fromMe: boolean;
  time: string;
}

export interface CurrentChat {
  name: string,
  avatar: string,
  status: string
}

@Component({
  selector: 'app-chat-content',
  imports: [Avatar, InputBox, MessageBubble, CommonModule],
  standalone: true,
  templateUrl: './chat-content.html',
  styleUrl: './chat-content.css'
})
export class ChatContent {
  @Input() currentChat: CurrentChat | undefined;

  @Input() messages: Message[] = [];

  @Output() sendMessage = new EventEmitter<string>();
  message: string = '';

  onSend(msg: string) {
    this.messages.push({
      text: msg,
      fromMe: true,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });

    setTimeout(() => {
      this.messages.push({
        text: 'Got it 👍',
        fromMe: false,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
    }, 1000);
  }
}
