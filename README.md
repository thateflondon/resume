# Resume / CV - Jerry FREDERIC

Professional resume repository, available in French and English.

## 📁 Structure

```
resume/
├── 2026/
│   ├── main_FR.tex    # French version
│   └── main_EN.tex    # English version
└── README.md
```

## 🌍 Languages

- **French** (`main_FR.tex`) - Version française
- **English** (`main_EN.tex`) - English version

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

## 📝 Maintenance

This repository tracks resume updates by year. The `2026/` directory contains the current versions.

---

**Maintained by**: Jerry FREDERIC  
**Last updated**: November 2026
