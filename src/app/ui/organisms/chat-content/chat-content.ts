import { Component, EventEmitter, Output } from '@angular/core';
import { Avatar } from '@app/ui/atoms/avatar/avatar';
import { ChatItem } from '@app/ui/molecules/chat-item/chat-item';
import { InputBox } from '@app/ui/molecules/input-box/input-box';
import { MessageBubble } from '@app/ui/molecules/message-bubble/message-bubble';

interface Message {
  text: string;
  fromMe: boolean;
  time: string;
}

@Component({
  selector: 'app-chat-content',
  imports: [Avatar, InputBox, MessageBubble],
  standalone: true,
  templateUrl: './chat-content.html',
  styleUrl: './chat-content.css'
})
export class ChatContent {
  currentChat = {
    name: 'John Doe',
    avatar: '/user.png',
    status: 'online'
  };

  messages: Message[] = [
    { text: 'Hey, how are you?', fromMe: false, time: '09:01' },
    { text: 'I’m good, thanks! What about you?', fromMe: true, time: '09:02' },
    { text: 'Doing great, just finished a project.', fromMe: false, time: '09:05' }
  ];

  onSend(msg: string) {
    this.messages.push({
      text: msg,
      fromMe: true,
      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
    });

    setTimeout(() => {
      this.messages.push({
        text: 'Got it 👍',
        fromMe: false,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})
      });
    }, 1000);
  }

}
