import { Component, Input } from '@angular/core';
import { ChatContent } from '@app/ui/organisms/chat-content/chat-content';
import { ChatList } from '@app/ui/organisms/chat-list/chat-list';
import { MenuItem, SidebarMenu } from '@app/ui/organisms/sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-chat-layout',
  imports: [ChatContent, ChatList, SidebarMenu],
  templateUrl: './chat-layout.html',
  styleUrl: './chat-layout.css'
})
export class ChatLayout {
  @Input() avatarSrc!: string;
  @Input() menuItems: MenuItem[] = [];
}
