import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private renderer: Renderer2;
  private colorScheme: string = 'light';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Enable dark mode
   */
  public enableDarkMode(): void {
    this.colorScheme = 'dark';
    this.renderer.addClass(document.body, 'dark-theme');
  }
  /**
   * Disable dark mode
   */
  public disableDarkMode(): void {
    this.colorScheme = 'light';
    this.renderer.removeClass(document.body, 'dark-theme');
  }
  /**
   * @returns 
   * Check if dark mode is enabled
   */
  public isDarkModeEnabled(): boolean {
    return this.colorScheme === 'dark';
  }
}
