# Resume - Jerry FREDERIC

Professional resume repository, available in French and English.

## 📁 Structure

```
resume/
├── 2026/
│   ├── main_FR.tex    # French version
│   └── main_EN.tex    # English version
├── src/
│   ├── main.ts        # TypeScript logic
│   └── style.css      # Tailwind CSS
├── index.html         # Main page
├── robots.txt         # SEO & AI bots
├── sitemap.xml        # Sitemap
└── README.md
```

## 🌍 Languages

- **French** (`main_FR.tex`) - Version française
- **English** (`main_EN.tex`) - English version

## 🚀 Development

### Prerequisites
- Node.js 20+
- npm

### Install & Run

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Tech Stack

- **Frontend**: HTML5, TypeScript, Tailwind CSS v4
- **Build Tool**: Vite
- **Resume**: LaTeX (XeLaTeX)
- **CI/CD**: GitHub Actions
- **Hosting**: GitHub Pages

## 🛠️ Compilation

These resumes are written in LaTeX and require **XeLaTeX** or **LuaLaTeX** for compilation.

### Local Compilation

```bash
cd 2026
xelatex main_FR.tex  # For French version
xelatex main_EN.tex  # For English version
```

### Overleaf

1. Upload the `.tex` file to Overleaf
2. Menu → Compiler → Select **XeLaTeX**
3. Compile

## 📄 Format

- **Layout**: Two-column design
- **Page count**: Single page (optimized)
- **Paper size**: A4
- **Font size**: 9pt
- **Dependencies**:
  - `fontspec` - Font selection
  - `polyglossia` - Multilingual support
  - `geometry` - Page margins
  - `enumitem` - List formatting
  - `titlesec` - Section styling
  - `xcolor` - Color definitions
  - `hyperref` - Hyperlinks

## 🎨 Design

- **Accent color**: `#1E77E2` (Blue)
- **Text color**: `#555555` (Grey)
- **Sans-serif font** throughout
- **Compact margins** for maximum content density
- **ATS-friendly**: Optimized for Applicant Tracking Systems

## 🤖 SEO & AI

Configured for maximum visibility in:
- Google AI Overviews
- ChatGPT Search (OAI-SearchBot)
- Claude Search (Claude-SearchBot)
- Perplexity

## 📋 License & Usage

**Feel free to use this resume as a template for your own!** This template is open for anyone to adapt and customize for their personal or professional use.

## 📝 Maintenance

This repository tracks resume updates by year. The `2026/` directory contains the current versions.

---

**Portfolio**: [www.jfpl.fr](https://www.jfpl.fr)  
**Last updated**: November 2026
