import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-sobre-nosotros',
  imports: [CommonModule],
  template: `
    <div class="sobre-nosotros">
      <section class="page-hero">
        <h1>{{ t().aboutPage.title }}</h1>
        <p>{{ t().aboutPage.subtitle }}</p>
      </section>

      <section class="container">
        <div class="story-section">
          <div class="story-content">
            <h2>{{ t().aboutPage.historyTitle }}</h2>
            <p>
              {{ t().aboutPage.historyText1 }}
            </p>
            <p>
              {{ t().aboutPage.historyText2 }}
            </p>
          </div>
          <div class="story-image">
            <span class="image-icon">🏛️</span>
          </div>
        </div>

        <div class="mission-vision">
          <div class="mission">
            <div class="icon">🎯</div>
            <h3>{{ t().aboutPage.missionTitle }}</h3>
            <p>
              {{ t().aboutPage.missionText }}
            </p>
          </div>
          <div class="vision">
            <div class="icon">🌟</div>
            <h3>{{ t().aboutPage.visionTitle }}</h3>
            <p>
              {{ t().aboutPage.visionText }}
            </p>
          </div>
        </div>

        <div class="values-section">
          <h2>{{ t().aboutPage.valuesTitle }}</h2>
          <div class="values-grid">
            <div class="value-card" *ngFor="let value of values()">
              <div class="value-icon">{{ value.icon }}</div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>

        <div class="team-section">
          <h2>{{ t().aboutPage.teamTitle }}</h2>
          <p class="team-intro">
            {{ t().aboutPage.teamIntro }}
          </p>
          <div class="team-grid">
            <div class="team-member" *ngFor="let member of team()">
              <div class="member-avatar">{{ member.icon }}</div>
              <h3>{{ member.name }}</h3>
              <p class="member-role">{{ member.role }}</p>
              <p class="member-bio">{{ member.bio }}</p>
            </div>
          </div>
        </div>

        <div class="awards-section">
          <h2>{{ t().aboutPage.awardsTitle }}</h2>
          <div class="awards-grid">
            <div class="award" *ngFor="let award of awards()">
              <div class="award-icon">🏆</div>
              <h4>{{ award.title }}</h4>
              <p>{{ award.year }}</p>
            </div>
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
