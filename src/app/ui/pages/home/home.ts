import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../core/theme/dark-mode.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home  {
  isChecked = false;
  themeName: string = '';
  private _themeService = inject(ThemeService);
  public theme$ = this._themeService.theme$;

  constructor() {
    this.isChecked = false;
    this.changeStatus();
  }

  private changeStatus() {
    this._themeService.theme$.subscribe((theme) => {
      this.themeName = theme;
    });

    if (this.themeName === 'dark') {
      this.isChecked = true;
    } else {
      this.isChecked = false;
    }
  }

  public toggleTheme(): void {
    this._themeService.toggleDarkMode();
    this.changeStatus();
  }

}
