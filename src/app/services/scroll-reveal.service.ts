import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ScrollRevealService {
  private observer: IntersectionObserver | null = null;

  init() {
    this.observer?.disconnect();
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            this.observer?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    this.observeAll();
  }

  observeAll() {
    if (!this.observer) return;
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
      if (!el.classList.contains('visible')) {
        this.observer!.observe(el);
      }
    });
  }

  destroy() {
    this.observer?.disconnect();
    this.observer = null;
  }
}
