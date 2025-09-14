import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface PropDoc {
  name: string;
  type: string;
  default?: string;
  description?: string;
}

@Component({
  selector: 'app-styleguide-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './styleguide-card.html',
  styleUrl: './styleguide-card.css'
})
export class StyleguideCard {
  @Input() title!: string;
  @Input() type!: string;
  @Input() props: PropDoc[] = [];
}
