type Language = 'en' | 'fr';

class ResumeApp {
  constructor() {
    this.init();
  }

  private init(): void {
    this.attachEventListeners();
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

    // Update profile text
    const profileEn = document.getElementById('profile-en');
    const profileFr = document.getElementById('profile-fr');

    if (lang === 'fr') {
      profileEn?.classList.add('hidden');
      profileFr?.classList.remove('hidden');
    } else {
      profileEn?.classList.remove('hidden');
      profileFr?.classList.add('hidden');
    }

    // Update PDF viewers
    const pdfFr = document.getElementById('pdf-fr');
    const pdfEn = document.getElementById('pdf-en');

    if (lang === 'fr') {
      pdfFr?.classList.remove('hidden');
      pdfEn?.classList.add('hidden');
    } else {
      pdfFr?.classList.add('hidden');
      pdfEn?.classList.remove('hidden');
    }

    // Update download buttons
    const downloadFr = document.getElementById('download-fr');
    const downloadEn = document.getElementById('download-en');

    if (lang === 'fr') {
      downloadFr?.classList.remove('hidden');
      downloadEn?.classList.add('hidden');
    } else {
      downloadFr?.classList.add('hidden');
      downloadEn?.classList.remove('hidden');
    }
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ResumeApp();
});
