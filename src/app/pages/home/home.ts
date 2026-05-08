import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
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
          <h2>{{ t().featured.title }}</h2>
          <div class="wine-grid">
            <div class="wine-card" *ngFor="let wine of featuredWines()">
              <div class="wine-image">
                <img [src]="wine.image" [alt]="wine.name" class="wine-bottle"
                     onerror="this.style.display='none';this.parentElement.innerHTML='<div class=wine-placeholder>🍷</div>'" />
              </div>
              <h3>{{ wine.name }}</h3>
              <p class="wine-type">{{ wine.type }}</p>
              <p class="wine-description">{{ wine.description }}</p>
              <a routerLink="/vinos" class="wine-link">{{ t().featured.viewMore }}</a>
            </div>
          </div>
        </div>
      </section>

      <!-- About Preview -->
      <section class="about-preview">
        <div class="container">
          <div class="about-content">
            <div class="about-text">
              <h2>{{ t().about.title }}</h2>
              <p>
                {{ t().about.text }}
              </p>
              <a routerLink="/sobre-nosotros" class="btn btn-outline">{{ t().about.btn }}</a>
            </div>
            <div class="about-image">
              <img src="/images/barriles.jpg" alt="Barriles Viña La Vite" class="about-img"
                   onerror="this.style.display='none';this.parentElement.innerHTML='<div class=image-placeholder>🍇</div>'" />
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="cta">
        <div class="container">
          <h2>{{ t().cta.title }}</h2>
          <p>{{ t().cta.text }}</p>
          <a routerLink="/contacto" class="btn btn-primary">{{ t().cta.btn }}</a>
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
      animation: fadeInUp 1.5s ease-out;
    }

    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .hero-title {
      font-family: 'Playfair Display', serif;
      font-size: 5rem;
      font-weight: 400;
      margin-bottom: 1rem;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
      letter-spacing: 2px;
      color: var(--bg-cream);
      text-transform: uppercase;
    }

    .hero-subtitle {
      font-family: 'Lato', sans-serif;
      font-size: 1.2rem;
      margin-bottom: 3rem;
      font-weight: 300;
      letter-spacing: 6px;
      text-transform: uppercase;
      color: var(--gold-light);
      border-top: 1px solid var(--gold-light);
      border-bottom: 1px solid var(--gold-light);
      display: inline-block;
      padding: 1rem 2rem;
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
    }

    .wine-card {
      background: white;
      padding: 0;
      text-align: center;
      box-shadow: 0 10px 40px rgba(93, 23, 37, 0.08);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(93, 23, 37, 0.05);
      overflow: hidden;
    }

    .wine-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 60px rgba(93, 23, 37, 0.15);
    }

    .wine-image {
      margin-bottom: 0;
      background: linear-gradient(180deg, #f8f5f0 0%, #ffffff 100%);
      padding: 3rem 2rem;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 350px;
    }

    .wine-image::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 50% 20%, rgba(212, 175, 55, 0.1) 0%, transparent 60%);
    }

    .wine-bottle {
      max-width: 100%;
      max-height: 320px;
      width: auto;
      height: auto;
      object-fit: contain;
      filter: drop-shadow(0 10px 30px rgba(93, 23, 37, 0.25));
      position: relative;
      z-index: 1;
      transition: transform 0.4s ease;
    }

    .wine-card:hover .wine-bottle {
      transform: scale(1.05);
    }

    .wine-placeholder {
      font-size: 5rem;
      color: var(--wine-deep);
    }

    .wine-card h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.75rem;
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
export class HomeComponent {
  protected translationService = inject(TranslationService);
  protected t = this.translationService.t;

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
}
