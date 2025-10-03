import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Avatar } from '@app/ui/atoms/avatar/avatar';
import { Button } from '@app/ui/atoms/button/button';
import { Icon } from '@app/ui/atoms/icon/icon';

export interface MenuItem {
  label: string;        
  ariaLabel: string;    
  iconSvg: string;      
  route?: string;  
  onClick?: () => void; 
}

@Component({
  selector: 'app-sidebar-menu',
  imports: [Avatar, Button, CommonModule],
  standalone: true,
  templateUrl: './sidebar-menu.html',
  styleUrl: './sidebar-menu.css'
})
export class SidebarMenu {
  @Input() avatarSrc: string = '/user.png';
  @Input() menuItems: MenuItem[] = [];
}
