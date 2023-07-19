
import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DarkModeService {
  private renderer: Renderer2;
  private readonly darkThemeClass = 'dark-theme';

  constructor(private rendererFactory: RendererFactory2) {
    this.renderer = this.rendererFactory.createRenderer(null, null);
    this.loadThemeFromLocalStorage();
  }

  toggleDarkMode(): void {
    if (this.isDarkModeEnabled()) {
      this.renderer.removeClass(document.body, this.darkThemeClass);
      localStorage.setItem('darkMode', 'false');
    } else {
      this.renderer.addClass(document.body, this.darkThemeClass);
      localStorage.setItem('darkMode', 'true');
    }
  }

  isDarkModeEnabled(): boolean {
    return document.body.classList.contains(this.darkThemeClass);
  }

  private loadThemeFromLocalStorage(): void {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode && darkMode === 'true') {
      this.renderer.addClass(document.body, this.darkThemeClass);
    }
  }
}
