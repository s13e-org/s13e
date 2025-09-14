import {  Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'secondary' | 'ghost';

@Component({
  selector: 'app-button',
  imports: [NgClass, NgIf],
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class Button {
  @Input() label?: string;                       
  @Input() ariaLabel?: string;                   
  @Input() type: 'button'|'submit'|'reset' = 'button';
  @Input() disabled = false;
  @Input() size: Size = 'md';
  @Input() variant: Variant = 'primary';
  @Input() class = '';
  
  @Output() clicked = new EventEmitter<MouseEvent>();

  onClick(e: MouseEvent) {
    if (!this.disabled) this.clicked.emit(e);
  }

  getBaseClasses() {
    const sizeMap: Record<Size, string> = {
      sm: 'text-sm px-2 py-1 rounded-md',
      md: 'text-base px-3 py-2 rounded-lg',
      lg: 'text-lg px-4 py-3 rounded-xl'
    };
    const variantMap: Record<Variant, string> = {
      primary: 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-2 focus:ring-blue-300',
      secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 focus:ring-2 focus:ring-gray-300',
      ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600'
    };

    const disabledCls = this.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'cursor-pointer';
    return `inline-flex items-center justify-center gap-2 ${sizeMap[this.size]} ${variantMap[this.variant]} ${disabledCls} focus:outline-none transition-colors duration-150 ${this.class}`;
  }

  getAriaLabel(): string | null {
    if (!this.label && !this.ariaLabel) {
      console.warn('app-atom-button: icon-only buttons should provide [ariaLabel] for accessibility.');
      return null;
    }
    return this.ariaLabel ?? this.label ?? null;
  }
}
