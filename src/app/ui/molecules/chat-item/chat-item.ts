import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Avatar } from '@app/ui/atoms/avatar/avatar';

export interface Chat {
  id: string;
  name: string;
  avatar: string;
  time: string;
  lastMessage?: string;
  unread?: number;
}

@Component({
  selector: 'app-chat-item',
  imports: [CommonModule, Avatar],
  templateUrl: './chat-item.html',
  styleUrl: './chat-item.css'
})
export class ChatItem {
   @Input() chat: Chat | undefined;
   @Input() count: number = 0;
 
   get unreadCount(): number {
    return this.chat?.unread ?? 0;
  }

  get hasUnread(): boolean {
  return !!(this.chat?.unread && this.chat.unread > 0);
}


}
