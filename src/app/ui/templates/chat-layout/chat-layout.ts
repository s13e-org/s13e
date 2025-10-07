import { Component, Input } from '@angular/core';
import { Chat } from '@app/ui/molecules/chat-item/chat-item';
import { ChatContent } from '@app/ui/organisms/chat-content/chat-content';
import { ChatList } from '@app/ui/organisms/chat-list/chat-list';
import { MenuItem, SidebarMenu } from '@app/ui/organisms/sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-chat-layout',
  imports: [ChatContent, ChatList, SidebarMenu],
  standalone: true,
  templateUrl: './chat-layout.html',
  styleUrl: './chat-layout.css'
})
export class ChatLayout {
  @Input() avatarSrc!: string;
  @Input() menuItems: MenuItem[] = [];
  // @Input() count: number = 0;
  @Input() chat: Chat[] = [];
}
