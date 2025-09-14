import { Component, inject } from '@angular/core';
import { ThemeService } from '@app/core/theme/dark-mode.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
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
