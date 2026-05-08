import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-galeria',
  imports: [CommonModule],
  template: `
    <div class="galeria">
      <section class="page-hero">
        <h1>{{ t().galleryPage.title }}</h1>
        <p>{{ t().galleryPage.subtitle }}</p>
      </section>

      <section class="container">
        <div class="gallery-grid">
          <div class="gallery-item" *ngFor="let item of galleryItems()">
            <div class="gallery-image">
              <img *ngIf="item.image" [src]="item.image" [alt]="item.title" class="gallery-img"
                   onerror="this.style.display='none'" />
              <span *ngIf="!item.image || !item.image" class="gallery-icon">{{ item.icon }}</span>
            </div>
            <div class="gallery-overlay">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="instagram-section">
        <div class="container">
          <h2>{{ t().galleryPage.instagramTitle }}</h2>
          <p class="instagram-handle">{{ t().galleryPage.instagramHandle }}</p>
          <p class="instagram-description">
            {{ t().galleryPage.instagramDescription }}
          </p>
          <a
            href="https://www.instagram.com/vinalavite/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-instagram"
          >
            <span class="instagram-icon">📸</span>
            {{ t().galleryPage.instagramButton }}
          </a>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .galeria {
      min-height: 100vh;
    }

    .page-hero {
      background: linear-gradient(135deg, var(--wine-deep) 0%, var(--charcoal) 100%);
      color: var(--bg-cream);
      text-align: center;
      padding: 6rem 2rem;
      margin-bottom: 5rem;
      position: relative;
      overflow: hidden;
    }

    .page-hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" opacity="0.05"><rect fill="%23D4AF37" width="1200" height="400"/></svg>');
      background-size: cover;
    }

    .page-hero h1 {
      font-family: 'Playfair Display', serif;
      font-size: 5rem;
      margin-bottom: 1rem;
      position: relative;
      z-index: 1;
      color: var(--gold-light);
      font-weight: 400;
      letter-spacing: 2px;
      text-transform: uppercase;
      text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
    }

    .page-hero p {
      font-family: 'Lato', sans-serif;
      font-size: 1.2rem;
      opacity: 0.95;
      position: relative;
      z-index: 1;
      letter-spacing: 6px;
      text-transform: uppercase;
      font-weight: 300;
      border-top: 1px solid var(--gold-light);
      border-bottom: 1px solid var(--gold-light);
      display: inline-block;
      padding: 1rem 2rem;
    }

    .gallery-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2.5rem;
      margin-bottom: 6rem;
    }

    .gallery-item {
      position: relative;
      aspect-ratio: 1;
      border-radius: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 10px 40px rgba(93, 23, 37, 0.1);
      border: 1px solid rgba(93, 23, 37, 0.08);
    }

    .gallery-item:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 60px rgba(93, 23, 37, 0.2);
    }

    .gallery-image {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, var(--wine-deep) 0%, var(--wine-burgundy) 100%);
    }

    .gallery-image::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: radial-gradient(circle at 30% 30%, rgba(212, 175, 55, 0.15) 0%, transparent 60%);
      z-index: 0;
    }

    .gallery-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .gallery-item:hover .gallery-img {
      transform: scale(1.1);
    }

    .gallery-icon {
      font-size: 4rem;
      z-index: 1;
      filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
    }

    .gallery-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: linear-gradient(to top, rgba(26, 26, 26, 0.95), rgba(93, 23, 37, 0.8) 50%, transparent);
      color: var(--gold-light);
      padding: 2.5rem;
      transform: translateY(100%);
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      backdrop-filter: blur(4px);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 100%;
    }

    .gallery-item:hover .gallery-overlay {
      transform: translateY(0);
    }

    .gallery-overlay h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      margin-bottom: 0.75rem;
      color: var(--gold-elegant);
      font-weight: 600;
    }

    .gallery-overlay p {
      font-size: 0.95rem;
      opacity: 0.95;
      color: var(--bg-cream);
      line-height: 1.6;
    }

    .instagram-section {
      background: linear-gradient(135deg, var(--bg-cream) 0%, #f5efe5 100%);
      padding: 7rem 0;
      text-align: center;
      position: relative;
    }

    .instagram-section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent 0%, var(--gold-elegant) 50%, transparent 100%);
    }

    .instagram-section h2 {
      font-family: 'Playfair Display', serif;
      font-size: 3rem;
      color: var(--wine-deep);
      margin-bottom: 1.5rem;
      font-weight: 700;
    }

    .instagram-section h2::after {
      content: '';
      display: block;
      width: 80px;
      height: 3px;
      background: var(--gold-elegant);
      margin: 1.5rem auto;
    }

    .instagram-handle {
      font-size: 2rem;
      color: var(--wine-burgundy);
      font-weight: 600;
      margin-bottom: 1.5rem;
      letter-spacing: 1px;
    }

    .instagram-description {
      color: var(--text-secondary);
      font-size: 1.15rem;
      max-width: 650px;
      margin: 0 auto 3rem;
      line-height: 1.8;
    }

    .btn-instagram {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%);
      color: white;
      padding: 1rem 2rem;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 600;
      font-size: 1.1rem;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .btn-instagram:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }

    .instagram-icon {
      font-size: 1.5rem;
    }

    @media (max-width: 768px) {
      .page-hero h1 {
        font-size: 2.5rem;
      }

      .gallery-grid {
        grid-template-columns: 1fr;
      }

      .instagram-section h2 {
        font-size: 2rem;
      }
    }
  `]
})
export class GaleriaComponent {
  protected translationService = inject(TranslationService);
  protected t = this.translationService.t;

  private galleryMeta: { icon: string; image?: string }[] = [
    { icon: '🍇', image: '/images/barriles.jpg' },
    { icon: '🍷', image: '/images/catacion.jpg' },
    { icon: '🏺', image: '/images/carmenere-vinedo.jpg' },
    { icon: '🎉', image: '/images/evento.jpg' },
    { icon: '🌄' },
    { icon: '👥' },
    { icon: '🌿' },
    { icon: '🥂' },
    { icon: '🏆' }
  ];

  galleryItems = computed(() =>
    this.t().galleryPage.items.map((item, i) => ({
      ...this.galleryMeta[i],
      title: item.title,
      description: item.description
    }))
  );
}
