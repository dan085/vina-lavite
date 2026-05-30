import { Directive, ElementRef, Input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[tilt3d]',
  standalone: true
})
export class Tilt3DDirective implements OnInit, OnDestroy {
  @Input() tiltMax   = 14;
  @Input() tiltScale = 1.04;
  @Input() tiltGlow  = true;

  private el!: HTMLElement;
  private rafId = 0;
  private boundMove!: (e: MouseEvent) => void;
  private boundLeave!: () => void;
  private prefersReduced = false;

  constructor(private host: ElementRef<HTMLElement>) {}

  ngOnInit() {
    this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (this.prefersReduced) return;

    this.el = this.host.nativeElement;
    this.el.style.transformStyle = 'preserve-3d';
    this.el.style.willChange = 'transform';

    this.boundMove  = (e) => { cancelAnimationFrame(this.rafId); this.rafId = requestAnimationFrame(() => this.tilt(e)); };
    this.boundLeave = () => { cancelAnimationFrame(this.rafId); this.reset(); };

    this.el.addEventListener('mousemove',  this.boundMove,  { passive: true });
    this.el.addEventListener('mouseleave', this.boundLeave, { passive: true });
  }

  private tilt(e: MouseEvent) {
    const r = this.el.getBoundingClientRect();
    const x = (e.clientX - r.left)  / r.width  - 0.5;   // -0.5 → 0.5
    const y = (e.clientY - r.top)   / r.height - 0.5;

    const rX =  -y * this.tiltMax * 2;
    const rY =   x * this.tiltMax * 2;

    this.el.style.transition = 'transform 0.08s linear, box-shadow 0.08s linear';
    this.el.style.transform =
      `perspective(900px) rotateX(${rX}deg) rotateY(${rY}deg) scale(${this.tiltScale}) translateZ(8px)`;

    if (this.tiltGlow) {
      this.el.style.boxShadow =
        `${-rY * 2}px ${rX * 2}px 50px rgba(93,23,37,0.18),
         ${-rY * 0.8}px ${rX * 0.8}px 90px rgba(202,138,4,0.12),
         0 30px 70px rgba(93,23,37,0.1)`;
    }
  }

  private reset() {
    this.el.style.transition = 'transform 0.55s cubic-bezier(0.4,0,0.2,1), box-shadow 0.55s ease';
    this.el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale(1) translateZ(0)`;
    if (this.tiltGlow) this.el.style.boxShadow = '';
  }

  ngOnDestroy() {
    cancelAnimationFrame(this.rafId);
    this.el?.removeEventListener('mousemove',  this.boundMove);
    this.el?.removeEventListener('mouseleave', this.boundLeave);
  }
}
