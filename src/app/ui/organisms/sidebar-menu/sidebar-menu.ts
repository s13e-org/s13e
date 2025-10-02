import { Component } from '@angular/core';
import { Avatar } from '@app/ui/atoms/avatar/avatar';
import { Icon } from '@app/ui/atoms/icon/icon';

@Component({
  selector: 'app-sidebar-menu',
  imports: [Avatar, Icon],
  standalone: true,
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.css'
})
export class SidebarMenu {
  // public items: [] = [];
}
