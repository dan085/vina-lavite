import { Component, inject } from '@angular/core';
import { TranslationService } from '../../services/translation.service';
import { Tilt3DDirective } from '../../directives/tilt3d.directive';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [Tilt3DDirective],
  template: `
    <div class="contacto">

      <!-- Hero -->
      <section class="page-hero">
        <h1>{{ t().contactPage.title }}</h1>
        <p>{{ t().contactPage.subtitle }}</p>
      </section>

      <!-- Body -->
      <section class="contact-body">
        <div class="container">
          <div class="contact-layout">

            <!-- Left: cards -->
            <div class="contact-left">
              <h2 class="section-label reveal">{{ t().contactPage.directContact }}</h2>

              <div class="contact-cards">

                <a href="https://wa.me/56934114862" target="_blank" class="ccard ccard--whatsapp reveal" tilt3d [tiltMax]="8">
                  <span class="ccard__strip"></span>
                  <span class="ccard__icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01C17.18 3.03 14.69 2 12.04 2zm-.01 1.67c2.2 0 4.26.86 5.82 2.42 1.55 1.56 2.41 3.63 2.41 5.83 0 4.54-3.7 8.23-8.24 8.23-1.48 0-2.93-.39-4.19-1.15l-.3-.17-3.12.82.83-3.04-.2-.32C4.24 14.96 3.8 13.43 3.8 11.87c.01-4.54 3.7-8.2 8.23-8.2zm-4.5 4.99c-.16 0-.39.06-.62.31-.22.26-.84.82-.84 1.99s.86 2.31 1.01 2.47c.13.16 1.63 2.57 3.9 3.5.54.23.96.37 1.29.48.66.21 1.27.18 1.75.11.55-.08 1.68-.68 1.92-1.35.23-.67.23-1.24.16-1.36-.07-.12-.26-.2-.55-.34-.29-.15-1.71-.85-1.98-.94-.26-.1-.46-.15-.65.13-.2.28-.75.84-.93 1.04-.18.2-.36.23-.65.08-.29-.13-1.23-.45-2.34-1.44-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.12-.59.13-.13.29-.34.43-.5.14-.16.19-.28.29-.48.1-.2.05-.38-.01-.5-.06-.12-.56-1.36-.74-1.82-.19-.49-.39-.42-.54-.43H7.53z"/>
                    </svg>
                  </span>
                  <span class="ccard__body">
                    <span class="ccard__name">WhatsApp</span>
                    <span class="ccard__desc">{{ t().contactPage.whatsapp }}</span>
                  </span>
                  <span class="ccard__arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                  </span>
                </a>

                <a href="https://instagram.com/vinalavite" target="_blank" class="ccard ccard--instagram reveal reveal-delay-1" tilt3d [tiltMax]="8">
                  <span class="ccard__strip"></span>
                  <span class="ccard__icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                    </svg>
                  </span>
                  <span class="ccard__body">
                    <span class="ccard__name">Instagram</span>
                    <span class="ccard__desc">{{ t().contactPage.instagram }}</span>
                  </span>
                  <span class="ccard__arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                  </span>
                </a>

                <a href="mailto:contacto@vinalavite.cl" class="ccard ccard--email reveal reveal-delay-2" tilt3d [tiltMax]="8">
                  <span class="ccard__strip"></span>
                  <span class="ccard__icon">
                    <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
                      <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                    </svg>
                  </span>
                  <span class="ccard__body">
                    <span class="ccard__name">Email</span>
                    <span class="ccard__desc">{{ t().contactPage.email }}</span>
                  </span>
                  <span class="ccard__arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="20" height="20">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"/>
                    </svg>
                  </span>
                </a>

              </div>
            </div>

            <!-- Right: brand panel -->
            <div class="contact-right reveal-right">
              <div class="brand-panel">
                <div class="brand-panel__deco">
                  <svg viewBox="0 0 80 140" width="80" height="140" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4 Q18 44 30 68 Q36 82 40 88 Q44 82 50 68 Q62 44 60 4 Z" fill="currentColor" opacity="0.18"/>
                    <path d="M23 4 Q21 40 33 62 Q38 76 40 82 Q42 76 47 62 Q59 40 57 4 Z" fill="currentColor" opacity="0.55"/>
                    <rect x="36" y="88" width="8" height="44" rx="4" fill="currentColor" opacity="0.3"/>
                    <rect x="24" y="128" width="32" height="6" rx="3" fill="currentColor" opacity="0.2"/>
                    <rect x="28" y="0" width="24" height="7" rx="3.5" fill="currentColor" opacity="0.35"/>
                    <ellipse cx="34" cy="42" rx="6" ry="2.5" fill="white" opacity="0.2" transform="rotate(-20 34 42)"/>
                  </svg>
                </div>
                <blockquote class="brand-panel__quote">
                  "In vino veritas"
                </blockquote>
                <p class="brand-panel__sub">Valle de Colchagua, Chile</p>
                <div class="brand-panel__divider"></div>
                <ul class="brand-panel__info">
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                    </svg>
                    Valle de Colchagua, Chile
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                    </svg>
                    Lun – Vie: 9:00 – 18:00
                  </li>
                  <li>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="18" height="18">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
                    </svg>
                    +56 9 3411 4862
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  `,
  styles: [`
    .contacto { min-height: 100vh; }

    /* ── Hero (consistente con las otras páginas) ── */
    .page-hero {
      background: linear-gradient(135deg, var(--wine-deep) 0%, var(--charcoal) 100%);
      color: var(--bg-cream);
      text-align: center;
      padding: 6rem 2rem;
      margin-bottom: 0;
      position: relative;
      overflow: hidden;
    }
    .page-hero::before {
      content: '';
      position: absolute; inset: 0;
      background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 400" opacity="0.04"><rect fill="%23D4AF37" width="1200" height="400"/></svg>');
      background-size: cover;
    }
    .page-hero h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: 5rem; font-weight: 400;
      margin-bottom: 1rem;
      position: relative; z-index: 1;
      color: var(--gold-light);
      letter-spacing: 2px; text-transform: uppercase;
      text-shadow: 0 4px 20px rgba(0,0,0,0.3);
    }
    .page-hero p {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.9rem;
      opacity: 0.95; position: relative; z-index: 1;
      letter-spacing: 6px; text-transform: uppercase; font-weight: 300;
      border-top: 1px solid rgba(232,212,160,0.4);
      border-bottom: 1px solid rgba(232,212,160,0.4);
      display: inline-block; padding: 0.9rem 2.5rem;
      background: rgba(255,255,255,0.04);
      backdrop-filter: blur(8px);
    }

    /* ── Body ── */
    .contact-body {
      padding: 6rem 0 7rem;
      background: var(--bg-cream);
    }

    .contact-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      align-items: start;
    }

    /* ── Section label ── */
    .section-label {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.25rem; font-weight: 500;
      color: var(--wine-deep);
      margin-bottom: 2.5rem;
      padding-bottom: 1rem;
      position: relative;
    }
    .section-label::after {
      content: '';
      position: absolute; bottom: 0; left: 0;
      width: 48px; height: 2px;
      background: linear-gradient(90deg, var(--gold-elegant), transparent);
    }

    /* ── Contact cards ── */
    .contact-cards { display: flex; flex-direction: column; gap: 1rem; }

    .ccard {
      display: flex;
      align-items: center;
      gap: 0;
      text-decoration: none;
      color: var(--text-primary);
      background: white;
      border: 1px solid rgba(93,23,37,0.06);
      box-shadow: 0 4px 24px rgba(93,23,37,0.06), 0 1px 4px rgba(93,23,37,0.04);
      overflow: hidden;
      position: relative;
      transform-style: preserve-3d;
      transition: box-shadow 0.4s ease;
    }

    /* Left accent strip */
    .ccard__strip {
      display: block;
      width: 4px;
      align-self: stretch;
      flex-shrink: 0;
      transition: width 0.35s cubic-bezier(0.4,0,0.2,1);
    }
    .ccard:hover .ccard__strip { width: 6px; }

    .ccard--whatsapp .ccard__strip  { background: #25D366; }
    .ccard--instagram .ccard__strip {
      background: linear-gradient(180deg, #f09433, #dc2743, #bc1888);
    }
    .ccard--email .ccard__strip     { background: var(--wine-deep); }

    /* Icon zone */
    .ccard__icon {
      display: flex; align-items: center; justify-content: center;
      width: 72px; height: 72px;
      flex-shrink: 0;
      transition: background 0.35s ease;
    }
    .ccard--whatsapp .ccard__icon  { color: #25D366; background: rgba(37,211,102,0.06); }
    .ccard--instagram .ccard__icon { color: #dc2743; background: rgba(220,39,67,0.06); }
    .ccard--email .ccard__icon     { color: var(--wine-deep); background: rgba(93,23,37,0.06); }

    .ccard:hover .ccard__icon { background: transparent; }

    /* Text */
    .ccard__body {
      flex: 1;
      display: flex; flex-direction: column;
      gap: 0.2rem;
      padding: 1.25rem 0;
    }
    .ccard__name {
      font-family: 'Cormorant Garamond', serif;
      font-size: 1.3rem; font-weight: 600;
      color: var(--wine-deep);
      letter-spacing: 0.3px;
    }
    .ccard__desc {
      font-size: 0.875rem;
      color: var(--text-secondary);
      letter-spacing: 0.2px;
    }

    /* Arrow */
    .ccard__arrow {
      padding: 0 1.5rem;
      color: rgba(93,23,37,0.25);
      transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), color 0.3s ease;
      flex-shrink: 0;
    }
    .ccard:hover .ccard__arrow {
      transform: translate(3px, -3px);
      color: var(--gold-elegant);
    }

    /* ── Right: brand panel ── */
    .brand-panel {
      background: linear-gradient(160deg, var(--wine-deep) 0%, var(--charcoal) 100%);
      color: var(--bg-cream);
      padding: 3.5rem 3rem;
      position: relative;
      overflow: hidden;
    }
    .brand-panel::before {
      content: '';
      position: absolute; inset: 0;
      background: radial-gradient(ellipse at 80% 20%, rgba(202,138,4,0.12) 0%, transparent 60%);
    }
    .brand-panel__deco {
      position: absolute; top: -20px; right: -10px;
      opacity: 0.12;
      color: var(--gold-light);
      transform: rotate(15deg) scale(1.8);
    }
    .brand-panel__quote {
      font-family: 'Cormorant Garamond', serif;
      font-size: 2.2rem; font-weight: 400;
      font-style: italic;
      color: var(--gold-light);
      line-height: 1.3;
      margin-bottom: 0.75rem;
      position: relative; z-index: 1;
    }
    .brand-panel__sub {
      font-family: 'Montserrat', sans-serif;
      font-size: 0.75rem; letter-spacing: 4px;
      text-transform: uppercase; opacity: 0.55;
      color: var(--bg-cream);
      margin-bottom: 2rem;
      position: relative; z-index: 1;
    }
    .brand-panel__divider {
      width: 48px; height: 1px;
      background: linear-gradient(90deg, var(--gold-elegant), transparent);
      margin-bottom: 2rem;
      position: relative; z-index: 1;
    }
    .brand-panel__info {
      list-style: none; padding: 0;
      display: flex; flex-direction: column; gap: 1rem;
      position: relative; z-index: 1;
    }
    .brand-panel__info li {
      display: flex; align-items: center; gap: 0.75rem;
      font-size: 0.9rem; color: rgba(250,247,242,0.75);
      margin: 0;
    }
    .brand-panel__info li svg { color: var(--gold-elegant); flex-shrink: 0; }

    /* ── Responsive ── */
    @media (max-width: 900px) {
      .page-hero h1 { font-size: 3rem; }
      .contact-layout {
        grid-template-columns: 1fr;
        gap: 3rem;
      }
    }
    @media (max-width: 480px) {
      .page-hero h1 { font-size: 2.25rem; }
      .contact-body { padding: 4rem 0 5rem; }
      .ccard__icon { width: 56px; height: 56px; }
    }
  `]
})
export class ContactoComponent {
  translationService = inject(TranslationService);
  t = this.translationService.t;
}
