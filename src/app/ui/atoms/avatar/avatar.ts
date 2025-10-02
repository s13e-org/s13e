import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './avatar.html',
  styleUrl: './avatar.css'
})
export class Avatar {
  @Input() src: string = '';         
  @Input() alt: string = 'avatar';   
  @Input() size: number = 40;        
  @Input() rounded: boolean = true;
  @Input() class = '';
}
