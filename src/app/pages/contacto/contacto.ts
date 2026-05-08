import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="contact-container">
      <div class="contact-header">
        <h1>{{ t().contactPage.title }}</h1>
        <p>{{ t().contactPage.subtitle }}</p>
      </div>

      <div class="contact-grid">
        <!-- Social & Direct Contact Section -->
        <div class="direct-contact">
          <h2>{{ t().contactPage.directContact }}</h2>
          
          <div class="contact-cards">
            <a href="https://wa.me/56934114862" target="_blank" class="contact-card whatsapp">
              <div class="icon-circle">
                <svg viewBox="0 0 24 24" class="icon">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M8.53 7.33C8.37 7.33 8.1 7.39 7.87 7.64C7.65 7.9 7.03 8.48 7.03 9.65C7.03 10.82 7.88 11.96 8 12.12C8.12 12.29 9.6 14.57 11.87 15.55C12.41 15.78 12.83 15.92 13.16 16.03C13.82 16.24 14.43 16.21 14.91 16.14C15.46 16.06 16.59 15.46 16.83 14.79C17.06 14.12 17.06 13.55 16.99 13.43C16.92 13.31 16.73 13.23 16.44 13.09C16.15 12.94 14.73 12.24 14.46 12.15C14.2 12.06 14 12.01 13.81 12.29C13.61 12.57 13.06 13.23 12.88 13.43C12.71 13.63 12.53 13.66 12.24 13.51C11.95 13.37 11.01 13.06 9.9 12.07C9.03 11.29 8.44 10.33 8.27 10.04C8.1 9.75 8.26 9.59 8.4 9.45C8.53 9.32 8.69 9.11 8.83 8.95C8.97 8.79 9.02 8.67 9.12 8.47C9.21 8.27 9.16 8.09 9.1 7.97C9.03 7.85 8.53 6.61 8.32 6.11C8.12 5.62 7.92 5.69 7.77 5.69C7.63 5.69 7.47 5.69 7.31 5.69C7.15 5.69 6.89 5.75 6.67 5.99C6.45 6.23 5.83 6.81 5.83 7.99V8L8.53 7.33Z" />
                </svg>
              </div>
              <div class="card-content">
                <h3>WhatsApp</h3>
                <p>{{ t().contactPage.whatsapp }}</p>
              </div>
            </a>

            <a href="https://instagram.com/vinalavite" target="_blank" class="contact-card instagram">
              <div class="icon-circle">
                <svg viewBox="0 0 24 24" class="icon">
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </div>
              <div class="card-content">
                <h3>Instagram</h3>
                <p>{{ t().contactPage.instagram }}</p>
              </div>
            </a>

            <a href="mailto:contacto@vinalavite.cl" class="contact-card email">
              <div class="icon-circle">
                <svg viewBox="0 0 24 24" class="icon">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" />
                </svg>
              </div>
              <div class="card-content">
                <h3>Email</h3>
                <p>{{ t().contactPage.email }}</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      padding: 120px 20px 60px;
      max-width: 1200px;
      margin: 0 auto;
      min-height: 80vh;
    }

    .contact-header {
      text-align: center;
      margin-bottom: 60px;
    }

    .contact-header h1 {
      font-family: 'Playfair Display', serif;
      font-size: 3.5rem;
      color: var(--wine-deep);
      margin-bottom: 15px;
    }

    .contact-header p {
      font-size: 1.2rem;
      color: #666;
    }

    .contact-grid {
      display: flex;
      justify-content: center;
      max-width: 600px;
      margin: 0 auto;
    }

    .direct-contact {
      width: 100%;
    }

    /* Direct Contact Cards */
    .direct-contact h2 {
      font-family: 'Playfair Display', serif;
      font-size: 2rem;
      color: var(--wine-deep);
      margin-bottom: 30px;
      position: relative;
      padding-bottom: 15px;
      text-align: center;
    }

    .direct-contact h2::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background-color: var(--gold-elegant);
    }

    .contact-cards {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .contact-card {
      display: flex;
      align-items: center;
      padding: 25px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      text-decoration: none;
      color: inherit;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      border: 1px solid rgba(0,0,0,0.05);
    }

    .contact-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    }

    .icon-circle {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 20px;
      transition: background-color 0.3s ease;
    }

    .icon {
      width: 30px;
      height: 30px;
      fill: white;
    }

    .card-content h3 {
      font-size: 1.2rem;
      margin: 0 0 5px;
      font-weight: 600;
    }

    .card-content p {
      margin: 0;
      color: #666;
      font-size: 0.95rem;
    }

    /* Card Specific Colors */
    .whatsapp .icon-circle { background: #25D366; }
    .whatsapp:hover { border-color: #25D366; }
    
    .instagram .icon-circle { background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); }
    .instagram:hover { border-color: #cc2366; }

    .email .icon-circle { background: var(--wine-deep); }
    .email:hover { border-color: var(--wine-deep); }

    @media (max-width: 900px) {
      .contact-header h1 {
        font-size: 2.5rem;
      }
    }

    @media (max-width: 480px) {
      .contact-container {
        padding: 100px 15px 40px;
      }

      .contact-card {
        padding: 20px;
      }
    }
  `]
})
export class ContactoComponent {
  translationService = inject(TranslationService);
  t = this.translationService.t;
}
