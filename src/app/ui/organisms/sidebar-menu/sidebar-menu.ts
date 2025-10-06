import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Avatar } from '@app/ui/atoms/avatar/avatar';
import { Button } from '@app/ui/atoms/button/button';

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

  constructor(private sanitizer: DomSanitizer) { }

  getSafeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }

  get mainMenuItems() {
    return this.menuItems.slice(0, -1);
  }

  get lastMenuItem() {
    return this.menuItems[this.menuItems.length - 1];
  }

}
