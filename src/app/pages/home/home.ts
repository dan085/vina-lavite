import { Component, inject, computed, AfterViewInit, OnDestroy, ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { ScrollRevealService } from '../../services/scroll-reveal.service';
import { Tilt3DDirective } from '../../directives/tilt3d.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, Tilt3DDirective],
  template: `
    <div class="home">
      <!-- Hero Section -->
      <section class="hero">
        <video autoplay [muted]="true" loop playsinline class="hero-video" poster="/images/carmenere-vinedo.jpg">
          <source src="/images/hero-video.mp4" type="video/mp4">
        </video>
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1 class="hero-title">{{ t().hero.title }}</h1>
          <p class="hero-subtitle">{{ t().hero.subtitle }}</p>
        </div>
      </section>

      <!-- Destacados Section -->
      <section class="featured">
        <div class="container">
          <h2 class="reveal">{{ t().featured.title }}</h2>
          <div class="wine-grid">
            @for (wine of featuredWines(); track wine.name) {
              <div class="wine-card reveal" tilt3d>
                <div class="wine-image">
                  <img [src]="wine.image" [alt]="wine.name" class="wine-bottle"
                       onerror="this.style.display='none';this.parentElement.innerHTML='<div class=wine-placeholder></div>'" />
                </div>
                <h3>{{ wine.name }}</h3>
                <p class="wine-type">{{ wine.type }}</p>
                <p class="wine-description">{{ wine.description }}</p>
                <a routerLink="/vinos" class="wine-link">{{ t().featured.viewMore }}</a>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- About Preview -->
      <section class="about-preview">
        <div class="container">
          <div class="about-content">
            <div class="about-text reveal-left">
              <h2>{{ t().about.title }}</h2>
              <p>{{ t().about.text }}</p>
              <a routerLink="/sobre-nosotros" class="btn btn-outline">{{ t().about.btn }}</a>
            </div>
            <div class="about-image reveal-right">
              <img src="/images/barriles.jpg" alt="Barriles Viña La Vite" class="about-img"
                   onerror="this.style.display='none'" />
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <h2 class="reveal">{{ t().cta.title }}</h2>
          <p class="reveal reveal-delay-1">{{ t().cta.text }}</p>
          <a routerLink="/contacto" class="btn btn-primary reveal reveal-delay-2">{{ t().cta.btn }}</a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .home {
      min-height: 100vh;
    }

    .hero {
      position: relative;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--bg-cream);
      text-align: center;
      overflow: hidden;
    }

    .hero-video {
      position: absolute;
      top: 50%;
      left: 50%;
      min-width: 100%;
      min-height: 100%;
      width: auto;
      height: auto;
      transform: translate(-50%, -50%);
      z-index: 0;
      object-fit: cover;
    }

    .hero-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(26, 26, 26, 0.3) 0%,
        rgba(93, 23, 37, 0.6) 50%,
        rgba(26, 26, 26, 0.8) 100%
      );
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 900px;
      animation: heroEnter 1.8s cubic-bezier(0.4, 0, 0.2, 1) both;
      transform-style: preserve-3d;
    }

    @keyframes heroEnter {
      from {
        opacity: 0;
        transform: perspective(1000px) rotateX(10deg) translateY(50px);
        filter: blur(6px);
      }
      to {
        opacity: 1;
        transform: perspective(1000px) rotateX(0deg) translateY(0);
        filter: blur(0);
      }
    }

    .hero-title {
      font-family: 'Cormorant Garamond', serif;
      font-size: 6rem;
      font-weight: 300;
      margin-bottom: 1.5rem;
      text-shadow:
        0 4px 20px rgba(0,0,0,0.4),
        0 0 80px rgba(202,138,4,0.2);
      letter-spacing: 6px;
      color: var(--bg-cream);
      text-transform: uppercase;
    }

    .hero-subtitle {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.95rem;
      margin-bottom: 3rem;
      font-weight: 300;
      letter-spacing: 7px;
      text-transform: uppercase;
      color: var(--gold-light);
      /* Liquid glass pill */
      background: rgba(255,255,255,0.06);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(232,212,160,0.3);
      display: inline-block;
      padding: 0.9rem 2.5rem;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
    }

    .hero-description {
      font-family: 'Lato', sans-serif;
      font-size: 1.1rem;
      margin-bottom: 3rem;
      opacity: 0.9;
      line-height: 1.8;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
      font-weight: 300;
    }

    .hero-buttons {
      display: flex;
      gap: 1.5rem;
      justify-content: center;
      flex-wrap: wrap;
    }

    .featured {
      padding: 7rem 0;
      background: var(--bg-light);
    }

    .featured h2 {
      text-align: center;
      font-family: 'Playfair Display', serif;
      font-size: 3.5rem;
      margin-bottom: 1rem;
      color: var(--wine-deep);
    }

    .featured h2::after {
      content: '';
      display: block;
      width: 80px;
      height: 3px;
      background: var(--gold-elegant);
      margin: 2rem auto;
    }

    .wine-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 3rem;
      margin-top: 4rem;
      perspective: 1400px;
    }

    .wine-card {
      background: white;
      padding: 0;
      text-align: center;
      box-shadow:
        0 4px 6px rgba(93,23,37,0.04),
        0 10px 40px rgba(93,23,37,0.08);
      border: 1px solid rgba(93,23,37,0.05);
      overflow: hidden;
      transform-style: preserve-3d;
    }

    .wine-image {
      margin-bottom: 0;
      background:
        radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.1) 0%, transparent 60%),
        linear-gradient(180deg, #ede5d8 0%, #f8f4ef 60%, #fff 100%);
      padding: 3rem 2rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 350px;
      overflow: hidden;
    }

    .wine-image::after {
      content: '';
      position: absolute;
      bottom: 0; left: 15%; width: 70%; height: 25%;
      background: linear-gradient(to top, rgba(212,175,55,0.1), transparent);
      border-radius: 50%;
      filter: blur(10px);
    }

    .wine-bottle {
      max-width: 100%;
      max-height: 320px;
      width: auto;
      height: auto;
      object-fit: contain;
      filter:
        drop-shadow(0 14px 28px rgba(93,23,37,0.28))
        drop-shadow(0 4px 8px rgba(93,23,37,0.12));
      position: relative;
      z-index: 1;
      transition: transform 0.5s cubic-bezier(0.34,1.56,0.64,1), filter 0.4s ease;
    }

    .wine-card:hover .wine-bottle {
      transform: scale(1.08) translateY(-8px) translateZ(16px);
      filter:
        drop-shadow(0 24px 48px rgba(93,23,37,0.4))
        drop-shadow(0 0 30px rgba(202,138,4,0.25));
    }

    .wine-placeholder {
      width: 80px; height: 150px;
      background: linear-gradient(180deg, var(--wine-deep) 0%, var(--wine-burgundy) 100%);
      opacity: 0.2;
      border-radius: 4px;
    }

    .wine-card h3 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.85rem;
      font-weight: 500;
      margin: 2rem 0 0.75rem;
      color: var(--wine-deep);
      padding: 0 1.5rem;
    }

    .wine-type {
      color: var(--gold-elegant);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }

    .wine-description {
      color: var(--text-secondary);
      margin-bottom: 2rem;
      line-height: 1.7;
      padding: 0 2rem;
    }

    .wine-link {
      display: inline-block;
      color: var(--wine-deep);
      text-decoration: none;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 0.85rem;
      padding: 0 2rem 2rem;
      transition: color 0.3s ease;
      position: relative;
    }

    .wine-link::after {
      content: '→';
      margin-left: 0.5rem;
      transition: margin-left 0.3s ease;
    }

    .wine-link:hover {
      color: var(--wine-burgundy);
    }

    .wine-link:hover::after {
      margin-left: 1rem;
    }

    .about-preview {
      padding: 7rem 0;
      background: var(--bg-cream);
    }

    .about-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5rem;
      align-items: center;
    }

    .about-text h2 {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      margin-bottom: 2rem;
      color: var(--wine-deep);
    }

    .about-text h2::after {
      content: '';
      display: block;
      width: 80px;
      height: 3px;
      background: var(--gold-elegant);
      margin-top: 1.5rem;
    }

    .about-text p {
      font-size: 1.1rem;
      line-height: 2;
      color: var(--text-secondary);
      margin-bottom: 2.5rem;
    }

    .about-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 8px;
      box-shadow: 0 20px 60px rgba(93, 23, 37, 0.3);
    }

    .about-image .image-placeholder {
      font-size: 12rem;
      text-align: center;
      background: linear-gradient(135deg, var(--wine-deep) 0%, var(--wine-burgundy) 100%);
      padding: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .about-image .image-placeholder::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%);
    }

    .cta {
      padding: 7rem 0;
      background: linear-gradient(135deg, var(--wine-deep) 0%, var(--charcoal) 100%);
      color: var(--bg-cream);
      text-align: center;
      position: relative;
      overflow: hidden;
    }

    .cta::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600" opacity="0.05"><rect fill="%23D4AF37" width="1200" height="600"/></svg>');
      background-size: cover;
    }

    .cta h2 {
      font-family: 'Playfair Display', serif;
      font-size: 3.5rem;
      margin-bottom: 1.5rem;
      position: relative;
      z-index: 1;
      color: var(--gold-light);
    }

    .cta p {
      font-size: 1.3rem;
      margin-bottom: 3rem;
      opacity: 0.9;
      position: relative;
      z-index: 1;
      color: var(--bg-cream);
    }

    .cta .btn {
      position: relative;
      z-index: 1;
    }

    @media (max-width: 768px) {
      .hero-title {
        font-size: 3rem;
      }

      .hero-subtitle {
        font-size: 1.2rem;
      }

      .about-content {
        grid-template-columns: 1fr;
      }

      .wine-grid {
        grid-template-columns: 1fr;
      }

      .featured h2, .cta h2 {
        font-size: 2.5rem;
      }
    }
  `]
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  protected translationService = inject(TranslationService);
  protected t = this.translationService.t;
  private scrollReveal = inject(ScrollRevealService);
  private el = inject(ElementRef);
  private rafId = 0;

  private wineImages = [
    '/images/vinos/malbec-colchagua.jpg',
    '/images/vinos/carmenere-aconcagua.jpg',
    '/images/vinos/cabernet-maipo.jpg'
  ];

  featuredWines = computed(() =>
    this.t().featured.wines.map((wine, i) => ({
      ...wine,
      image: this.wineImages[i]
    }))
  );

  ngAfterViewInit() {
    this.scrollReveal.observeAll();
    this.initParallax();
  }

  private initParallax() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const hero = this.el.nativeElement.querySelector('.hero-content') as HTMLElement;
    const overlay = this.el.nativeElement.querySelector('.hero-overlay') as HTMLElement;
    if (!hero) return;

    const onScroll = () => {
      this.rafId = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight) {
          hero.style.transform = `translateY(${y * 0.35}px)`;
          hero.style.opacity = String(1 - y / (window.innerHeight * 0.8));
          if (overlay) overlay.style.opacity = String(0.6 + y / (window.innerHeight * 2));
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // Store cleanup on destroy
    (this as any)._removeParallax = () => window.removeEventListener('scroll', onScroll);
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
    (this as any)._removeParallax?.();
  }
}
