import { Component, inject, computed } from '@angular/core';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-sobre-nosotros',
  imports: [],
  template: `
    <div class="sobre-nosotros">
      <section class="page-hero">
        <h1>{{ t().aboutPage.title }}</h1>
        <p>{{ t().aboutPage.subtitle }}</p>
      </section>

      <section class="container">
        <div class="story-section">
          <div class="story-content reveal-left">
            <h2>{{ t().aboutPage.historyTitle }}</h2>
            <p>{{ t().aboutPage.historyText1 }}</p>
            <p>{{ t().aboutPage.historyText2 }}</p>
          </div>
          <div class="story-image reveal-right">
            <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg" width="160" height="200">
              <path d="M30 10 Q28 60 44 90 Q54 110 60 116 Q66 110 76 90 Q92 60 90 10 Z" fill="currentColor" opacity="0.12"/>
              <path d="M34 10 Q32 55 48 84 Q56 102 60 108 Q64 102 72 84 Q88 55 86 10 Z" fill="currentColor" opacity="0.5"/>
              <rect x="54" y="108" width="12" height="44" rx="6" fill="currentColor" opacity="0.3"/>
              <rect x="38" y="146" width="44" height="8" rx="4" fill="currentColor" opacity="0.2"/>
              <rect x="42" y="4" width="36" height="10" rx="5" fill="currentColor" opacity="0.35"/>
              <rect x="50" y="0" width="20" height="6" rx="3" fill="currentColor" opacity="0.45"/>
              <ellipse cx="52" cy="58" rx="10" ry="4" fill="white" opacity="0.2" transform="rotate(-20 52 58)"/>
            </svg>
          </div>
        </div>

        <div class="mission-vision">
          <div class="mission reveal">
            <div class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
            </div>
            <h3>{{ t().aboutPage.missionTitle }}</h3>
            <p>{{ t().aboutPage.missionText }}</p>
          </div>
          <div class="vision reveal reveal-delay-2">
            <div class="icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
              </svg>
            </div>
            <h3>{{ t().aboutPage.visionTitle }}</h3>
            <p>{{ t().aboutPage.visionText }}</p>
          </div>
        </div>

        <div class="values-section">
          <h2 class="reveal">{{ t().aboutPage.valuesTitle }}</h2>
          <div class="values-grid">
            @for (value of values(); track value.title) {
              <div class="value-card reveal">
                <div class="value-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36">
                    @if (value.icon === '🌱') {
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3C7 3 3 7.5 3 12c0 2.5 1 4.7 2.6 6.3M12 3c5 0 9 4.5 9 9 0 2.5-1 4.7-2.6 6.3M12 3v18M9 6c0 3.3 1.3 6 3 8.5C13.7 12 15 9.3 15 6"/>
                    }
                    @if (value.icon === '⭐') {
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"/>
                    }
                    @if (value.icon === '🤝') {
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"/>
                    }
                    @if (value.icon === '❤️') {
                      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"/>
                    }
                  </svg>
                </div>
                <h3>{{ value.title }}</h3>
                <p>{{ value.description }}</p>
              </div>
            }
          </div>
        </div>

        <div class="team-section">
          <h2 class="reveal">{{ t().aboutPage.teamTitle }}</h2>
          <p class="team-intro reveal reveal-delay-1">{{ t().aboutPage.teamIntro }}</p>
          <div class="team-grid">
            @for (member of team(); track member.name) {
              <div class="team-member reveal">
                <div class="member-avatar">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" width="44" height="44">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"/>
                  </svg>
                </div>
                <h3>{{ member.name }}</h3>
                <p class="member-role">{{ member.role }}</p>
                <p class="member-bio">{{ member.bio }}</p>
              </div>
            }
          </div>
        </div>

        <div class="awards-section">
          <h2 class="reveal">{{ t().aboutPage.awardsTitle }}</h2>
          <div class="awards-grid">
            @for (award of awards(); track award.title) {
              <div class="award reveal">
                <div class="award-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="36" height="36">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"/>
                  </svg>
                </div>
                <h4>{{ award.title }}</h4>
                <p>{{ award.year }}</p>
              </div>
            }
          </div>
        </div>
      </section>
    </div>
  `,
  styles: [`
    .sobre-nosotros {
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

    .story-section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      margin-bottom: 5rem;
    }

    .story-content h2 {
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 1.5rem;
    }

    .story-content p {
      font-size: 1.1rem;
      line-height: 1.8;
      color: #4a5568;
      margin-bottom: 1.5rem;
    }

    .story-image {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 16px;
      padding: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-icon {
      font-size: 8rem;
    }

    .mission-vision {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 5rem;
    }

    .mission, .vision {
      background: white;
      padding: 3rem;
      border-radius: 16px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
    }

    .mission .icon, .vision .icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .mission h3, .vision h3 {
      font-size: 1.8rem;
      color: #2d3748;
      margin-bottom: 1rem;
    }

    .mission p, .vision p {
      color: #718096;
      line-height: 1.8;
    }

    .values-section {
      margin-bottom: 5rem;
    }

    .values-section h2 {
      text-align: center;
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 3rem;
    }

    .values-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .value-card {
      background: #f7fafc;
      padding: 2.5rem;
      border-radius: 12px;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .value-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 12px rgba(0, 0, 0, 0.1);
    }

    .value-icon {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .value-card h3 {
      font-size: 1.3rem;
      color: #2d3748;
      margin-bottom: 0.75rem;
    }

    .value-card p {
      color: #718096;
      line-height: 1.6;
    }

    .team-section {
      margin-bottom: 5rem;
    }

    .team-section h2 {
      text-align: center;
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 1rem;
    }

    .team-intro {
      text-align: center;
      color: #718096;
      font-size: 1.1rem;
      margin-bottom: 3rem;
    }

    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2.5rem;
    }

    .team-member {
      background: white;
      padding: 2.5rem;
      border-radius: 16px;
      text-align: center;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .member-avatar {
      width: 100px;
      height: 100px;
      margin: 0 auto 1.5rem;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
    }

    .team-member h3 {
      font-size: 1.5rem;
      color: #2d3748;
      margin-bottom: 0.5rem;
    }

    .member-role {
      color: #667eea;
      font-weight: 600;
      margin-bottom: 1rem;
    }

    .member-bio {
      color: #718096;
      line-height: 1.6;
    }

    .awards-section {
      background: #f7fafc;
      padding: 4rem 2rem;
      border-radius: 16px;
      margin-bottom: 3rem;
    }

    .awards-section h2 {
      text-align: center;
      font-size: 2.5rem;
      color: #2d3748;
      margin-bottom: 3rem;
    }

    .awards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 2rem;
      max-width: 900px;
      margin: 0 auto;
    }

    .award {
      background: white;
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .award-icon {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }

    .award h4 {
      font-size: 1.1rem;
      color: #2d3748;
      margin-bottom: 0.5rem;
    }

    .award p {
      color: #667eea;
      font-weight: 600;
    }

    @media (max-width: 768px) {
      .page-hero h1 {
        font-size: 2rem;
      }

      .story-section, .mission-vision {
        grid-template-columns: 1fr;
      }

      .values-grid, .team-grid, .awards-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SobreNosotrosComponent {
  protected translationService = inject(TranslationService);
  protected t = this.translationService.t;

  private valueIcons = ['🌱', '⭐', '🤝', '❤️'];
  private teamIcons = ['👨‍💼', '👩‍🌾', '👨‍🔬'];

  values = computed(() =>
    this.t().aboutPage.values.map((v, i) => ({
      icon: this.valueIcons[i],
      title: v.title,
      description: v.description
    }))
  );

  team = computed(() =>
    this.t().aboutPage.team.map((m, i) => ({
      icon: this.teamIcons[i],
      name: m.name,
      role: m.role,
      bio: m.bio
    }))
  );

  awards = computed(() => this.t().aboutPage.awards);
}
