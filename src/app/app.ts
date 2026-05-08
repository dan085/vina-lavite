import { Component, signal, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslationService, Language } from './services/translation.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Viña La Vite');
  protected menuOpen = signal(false);
  protected translationService = inject(TranslationService);
  
  // Expose the translation signal directly for easier access in template
  protected t = this.translationService.t;

  toggleMenu() {
    this.menuOpen.update(value => !value);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  changeLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
    this.closeMenu();
  }
}
