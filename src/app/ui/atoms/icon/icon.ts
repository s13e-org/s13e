import { ChangeDetectionStrategy,  Component, ElementRef, HostBinding, Input, Sanitizer, SecurityContext, computed, effect, inject, signal } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

export type IconVariant = 'auto' | 'svg' | 'img' | 'sprite' | 'projected';

@Component({
  selector: 'app-icon',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './icon.html',
  styleUrl: './icon.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'inline-flex items-center justify-center select-none align-middle',
    '[attr.role]': 'role()',
    '[attr.aria-hidden]': 'ariaHidden() ? true : null',
    '[attr.aria-label]': 'ariaHidden() ? null : ariaLabel || null',
    '[attr.title]': 'title || null',
  },
})
export class Icon {
  private sanitizer = inject(DomSanitizer);

  @Input() src?: string;

  @Input() svg?: string;

  @Input() name?: string;

  @Input() variant: IconVariant = 'auto';

  @Input() strokeWidth: string | number = 1.5;

  @Input() colorClass = '';

  @Input() ariaLabel?: string;

  @Input() decorative = true;

  @Input() decoding: 'sync' | 'async' | 'auto' = 'async';
  @Input() loading: 'eager' | 'lazy' = 'lazy';

  @Input() title?: string;

  @Input() trustSvg = false;

  @Input() spriteBase?: string;

  role = () => 'img';
  ariaHidden = () => (this.decorative && !this.ariaLabel);

  get renderVariant(): IconVariant {
    if (this.variant !== 'auto') return this.variant;
    if (this.svg) return 'svg';
    if (this.name) return 'sprite';
    if (this.src) return 'img';
    return 'projected';
  }

  get safeSvg(): SafeHtml | null {
    if (!this.svg) return null;
    if (this.trustSvg) {
      return this.sanitizer.bypassSecurityTrustHtml(this.svg);
    }
    const cleaned = this.sanitizer.sanitize(SecurityContext.HTML, this.svg);
    return cleaned ? this.sanitizer.bypassSecurityTrustHtml(cleaned) : null;
  }

  get spriteHref(): string | null {
    if (!this.name) return null;
    return this.spriteBase ? `${this.spriteBase}#${this.name}` : `#${this.name}`;
  }
}
