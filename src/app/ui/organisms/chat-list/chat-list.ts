import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chat, ChatItem } from '@app/ui/molecules/chat-item/chat-item';

@Component({
  selector: 'app-chat-list',
  imports: [ChatItem, CommonModule],
  templateUrl: './chat-list.html',
  styleUrl: './chat-list.css'
})
export class ChatList {
  // @Input() count: number = 0;
  @Input() chat: Chat[] = [];
}
