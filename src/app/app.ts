import { Component, signal, inject, AfterViewInit } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { TranslationService, Language } from './services/translation.service';
import { ScrollRevealService } from './services/scroll-reveal.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('Viña La Vite');
  protected menuOpen = signal(false);
  protected translationService = inject(TranslationService);
  protected t = this.translationService.t;

  private router = inject(Router);
  private scrollReveal = inject(ScrollRevealService);

  constructor() {
    this.router.events.pipe(
      filter(e => e instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
      setTimeout(() => this.scrollReveal.init(), 120);
    });
  }

  ngAfterViewInit() {
    this.scrollReveal.init();
  }

  toggleMenu() {
    this.menuOpen.update(v => !v);
  }

  closeMenu() {
    this.menuOpen.set(false);
  }

  changeLanguage(lang: Language) {
    this.translationService.setLanguage(lang);
    this.closeMenu();
  }
}
