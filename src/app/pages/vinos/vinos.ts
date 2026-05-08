import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

type WineCategoryKey = 'red' | 'white' | 'rose' | 'sparkling';
type FilterKey = 'all' | WineCategoryKey;

@Component({
  selector: 'app-vinos',
  imports: [CommonModule],
  template: `
    <div class="vinos">
      <section class="page-hero">
        <h1>{{ t().winesPage.title }}</h1>
        <p>{{ t().winesPage.subtitle }}</p>
      </section>

      <section class="container">
        <div class="filters">
          <button
            *ngFor="let filter of filters()"
            class="filter-btn"
            [class.active]="selectedFilter() === filter.value"
            (click)="selectedFilter.set(filter.value)"
          >
            {{ filter.label }}
          </button>
        </div>

        <div class="wines-grid">
          <div class="wine-card" *ngFor="let wine of filteredWines()">
            <div class="wine-image">
              <span class="wine-icon">🍷</span>
            </div>
            <div class="wine-info">
              <span class="wine-category">{{ wine.typeLabel }}</span>
              <h3>{{ wine.name }}</h3>
              <p class="wine-year">{{ t().winesPage.year }} {{ wine.year }}</p>
              <p class="wine-description">{{ wine.description }}</p>
              <div class="wine-details">
                <span><strong>{{ t().winesPage.varietal }}:</strong> {{ wine.varietal }}</span>
                <span><strong>{{ t().winesPage.alcohol }}:</strong> {{ wine.alcohol }}%</span>
                <span><strong>{{ t().winesPage.temperature }}:</strong> {{ wine.temperature }}</span>
              </div>
              <div class="wine-notes">
                <h4>{{ t().winesPage.tastingNotes }}:</h4>
                <p>{{ wine.tastingNotes }}</p>
              </div>
              <div class="wine-pairing">
                <h4>{{ t().winesPage.pairing }}:</h4>
                <p>{{ wine.pairing }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .vinos {
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

    .filters {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 4rem;
      flex-wrap: wrap;
    }

    .filter-btn {
      padding: 0.875rem 2rem;
      border: 1px solid var(--wine-deep);
      background: white;
      color: var(--wine-deep);
      border-radius: 0;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      text-transform: uppercase;
      letter-spacing: 1.5px;
      font-size: 0.85rem;
      position: relative;
      overflow: hidden;
    }

    .filter-btn::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 100%;
      background: var(--wine-deep);
      transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      z-index: -1;
    }

    .filter-btn:hover::before,
    .filter-btn.active::before {
      width: 100%;
    }

    .filter-btn:hover {
      color: var(--gold-light);
    }

    .filter-btn.active {
      color: var(--gold-light);
    }

    .wines-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      gap: 2.5rem;
      margin-bottom: 4rem;
    }

    .wine-card {
      background: white;
      border-radius: 0;
      overflow: hidden;
      box-shadow: 0 10px 40px rgba(93, 23, 37, 0.08);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(93, 23, 37, 0.06);
    }

    .wine-card:hover {
      transform: translateY(-10px);
      box-shadow: 0 20px 60px rgba(93, 23, 37, 0.15);
      border-color: var(--gold-elegant);
    }

    .wine-image {
      background: linear-gradient(180deg, #f8f5f0 0%, #ffffff 100%);
      padding: 3rem;
      text-align: center;
      min-height: 250px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
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

    .wine-icon {
      font-size: 5rem;
      display: block;
      position: relative;
      z-index: 1;
      filter: drop-shadow(0 4px 8px rgba(93, 23, 37, 0.15));
    }

    .wine-info {
      padding: 2rem;
    }

    .wine-category {
      display: inline-block;
      background: var(--gold-elegant);
      color: var(--charcoal);
      padding: 0.4rem 1.2rem;
      border-radius: 0;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 1.5px;
    }

    .wine-info h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.75rem;
      color: var(--wine-deep);
      margin-bottom: 0.75rem;
      font-weight: 600;
      letter-spacing: -0.5px;
    }

    .wine-year {
      color: var(--gold-elegant);
      font-style: italic;
      margin-bottom: 1rem;
      font-weight: 500;
    }

    .wine-description {
      color: var(--text-secondary);
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .wine-details {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.5rem;
      background: var(--bg-cream);
      border-radius: 0;
      margin-bottom: 1.5rem;
      font-size: 0.95rem;
      border: 1px solid rgba(93, 23, 37, 0.08);
    }

    .wine-details strong {
      color: #2d3748;
    }

    .wine-notes, .wine-pairing {
      margin-top: 1rem;
    }

    .wine-notes h4, .wine-pairing h4 {
      font-size: 1.1rem;
      color: #2d3748;
      margin-bottom: 0.5rem;
    }

    .wine-notes p, .wine-pairing p {
      color: #718096;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .page-hero h1 {
        font-size: 2rem;
      }

      .wines-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class VinosComponent {
  protected translationService = inject(TranslationService);
  protected t = this.translationService.t;

  selectedFilter = signal<FilterKey>('all');

  filters = computed(() => [
    { value: 'all' as FilterKey, label: this.t().winesPage.all },
    { value: 'red' as FilterKey, label: this.t().winesPage.red },
    { value: 'white' as FilterKey, label: this.t().winesPage.white },
    { value: 'rose' as FilterKey, label: this.t().winesPage.rose },
    { value: 'sparkling' as FilterKey, label: this.t().winesPage.sparkling }
  ]);

  private wineMeta: { name: string; typeKey: WineCategoryKey; year: number; varietal: string; alcohol: number; temperature: string }[] = [
    { name: 'Malbec Reserva', typeKey: 'red', year: 2021, varietal: 'Malbec 100%', alcohol: 14.5, temperature: '16-18°C' },
    { name: 'Cabernet Sauvignon Gran Reserva', typeKey: 'red', year: 2020, varietal: 'Cabernet Sauvignon 85%, Merlot 15%', alcohol: 14.0, temperature: '17-19°C' },
    { name: 'Chardonnay Premium', typeKey: 'white', year: 2022, varietal: 'Chardonnay 100%', alcohol: 13.0, temperature: '8-10°C' },
    { name: 'Sauvignon Blanc', typeKey: 'white', year: 2023, varietal: 'Sauvignon Blanc 100%', alcohol: 12.5, temperature: '6-8°C' },
    { name: 'Pinot Noir', typeKey: 'red', year: 2021, varietal: 'Pinot Noir 100%', alcohol: 13.5, temperature: '14-16°C' },
    { name: 'Rosé La Vite', typeKey: 'rose', year: 2023, varietal: 'Malbec 60%, Pinot Noir 40%', alcohol: 12.0, temperature: '6-8°C' },
    { name: 'Espumante Brut Nature', typeKey: 'sparkling', year: 2020, varietal: 'Chardonnay 50%, Pinot Noir 50%', alcohol: 12.5, temperature: '6-8°C' },
    { name: 'Blend de Autor', typeKey: 'red', year: 2019, varietal: 'Malbec 40%, Cabernet Sauvignon 30%, Syrah 30%', alcohol: 14.8, temperature: '17-19°C' }
  ];

  wines = computed(() => {
    const wp = this.t().winesPage;
    return this.wineMeta.map((meta, i) => ({
      ...meta,
      typeLabel: wp[meta.typeKey],
      description: wp.list[i].description,
      tastingNotes: wp.list[i].tastingNotes,
      pairing: wp.list[i].pairing
    }));
  });

  filteredWines = computed(() => {
    const filter = this.selectedFilter();
    if (filter === 'all') return this.wines();
    return this.wines().filter(wine => wine.typeKey === filter);
  });
}
