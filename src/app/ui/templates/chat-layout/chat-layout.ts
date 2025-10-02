import { Component } from '@angular/core';
import { ChatContent } from '@app/ui/organisms/chat-content/chat-content';
import { ChatList } from '@app/ui/organisms/chat-list/chat-list';
import { SidebarMenu } from '@app/ui/organisms/sidebar-menu/sidebar-menu';

@Component({
  selector: 'app-chat-layout',
  imports: [ChatContent, ChatList, SidebarMenu],
  templateUrl: './chat-layout.html',
  styleUrl: './chat-layout.css'
})
export class ChatLayout {

}
