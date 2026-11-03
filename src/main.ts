import Lenis from 'lenis';

type Language = 'en' | 'fr';

class ResumeApp {
  private lenis: Lenis;

  constructor() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    this.init();
  }

  private init(): void {
    this.attachEventListeners();
    this.startSmoothScroll();
  }

  private startSmoothScroll(): void {
    const raf = (time: number) => {
      this.lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }

  private attachEventListeners(): void {
    const langButtons = document.querySelectorAll<HTMLButtonElement>('.lang-btn');
    langButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const lang = target.dataset.lang as Language;
        if (lang) {
          this.switchLanguage(lang);
        }
      });
    });
  }

  private switchLanguage(lang: Language): void {
    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active', 'bg-[#1E77E2]', 'text-white', 'shadow-sm');
      btn.classList.add('text-slate-600', 'hover:bg-slate-50');
    });
    const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
    activeBtn?.classList.remove('text-slate-600', 'hover:bg-slate-50');
    activeBtn?.classList.add('active', 'bg-[#1E77E2]', 'text-white', 'shadow-sm');

    // Update profile text with fade
    const profileEn = document.getElementById('profile-en');
    const profileFr = document.getElementById('profile-fr');

    if (lang === 'fr') {
      profileEn?.classList.add('opacity-0');
      setTimeout(() => {
        profileEn?.classList.add('hidden');
        profileFr?.classList.remove('hidden');
        setTimeout(() => profileFr?.classList.remove('opacity-0'), 10);
      }, 300);
    } else {
      profileFr?.classList.add('opacity-0');
      setTimeout(() => {
        profileFr?.classList.add('hidden');
        profileEn?.classList.remove('hidden');
        setTimeout(() => profileEn?.classList.remove('opacity-0'), 10);
      }, 300);
    }

    // Update PDF viewers with cross-fade
    const pdfFr = document.getElementById('pdf-fr');
    const pdfEn = document.getElementById('pdf-en');

    if (lang === 'fr') {
      pdfEn?.classList.add('opacity-0');
      setTimeout(() => {
        pdfEn?.classList.add('hidden');
        pdfFr?.classList.remove('hidden');
        setTimeout(() => pdfFr?.classList.remove('opacity-0'), 10);
      }, 300);
    } else {
      pdfFr?.classList.add('opacity-0');
      setTimeout(() => {
        pdfFr?.classList.add('hidden');
        pdfEn?.classList.remove('hidden');
        setTimeout(() => pdfEn?.classList.remove('opacity-0'), 10);
      }, 300);
    }

    // Update download button
    const downloadBtn = document.getElementById('download-btn') as HTMLAnchorElement;
    const downloadText = document.getElementById('download-text');

    if (downloadBtn && downloadText) {
      if (lang === 'fr') {
        downloadBtn.href = 'Jerry_FREDERIC_CV_FR.pdf';
        downloadText.textContent = 'Télécharger PDF';
      } else {
        downloadBtn.href = 'Jerry_FREDERIC_CV_EN.pdf';
        downloadText.textContent = 'Download PDF';
      }
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ResumeApp();
});
