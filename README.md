# Interkace Studio Website

High-quality, custom digital experience website for **Interkace Studio**.

---

## 🚀 Quick Start

### Option 1: Live Static Preview
Run any simple HTTP server in the project root directory:
```bash
npx serve .
```

### Option 2: Vite Development Server
Install dependencies and run Vite:
```bash
npm install
npm run dev
```

---

## 📂 Project Structure & Architecture

```
.
├── index.html                  # HTML entry point with meta tags & global font loads
├── assets/                     # Static assets, media, fonts, icons, & JS modules
│   ├── about-us/               # Interactive About Us section iframe & assets
│   ├── all-works-carousel/     # 3D Spiral All Works showcase iframe & runtime
│   ├── brand/                  # Logos, badges, favicons, OG images, noise texture
│   ├── category-carousel/      # Specialized fluid category carousel iframe
│   ├── core/                   # Main React application & core design components
│   │   ├── index.js            # Main application bundle & interactive sections
│   │   ├── index.css           # Core styling and animations
│   │   ├── vendor-react.js     # React runtime
│   │   ├── vendor-lenis.js     # Lenis smooth scroll engine
│   │   ├── rolldown-runtime.js # Module loader
│   │   └── CustomCursor.js     # Custom interactive cursor
│   ├── folder-cards/           # 3D Confidential UI Folder Cards component & assets
│   ├── hero/                   # Hero section assets (mockups, SVGs, crowd peep art)
│   ├── process/                # 5-step interactive process videos and icons
│   └── tools/                  # Marquee & tech stack icons
├── fonts/                      # High-definition web fonts (LayGrotesk, NeueMachina, Lilita)
├── scripts/                    # Smooth scroll, shader transitions, & external libs
│   ├── libs/                   # GSAP, Matter.js, ScrollTrigger, SplitText
│   ├── gabriel-scroll.js       # Pinned scroll mechanics
│   ├── shader-transition.js    # Canvas shader effects
│   └── whatsapp-eye-button.js  # Interactive floating eye contact widget
├── styles/                     # Core stylesheets
│   ├── gabriel-scroll.css      # Pinned scroll layout rules
│   └── mwg-style.css           # Master typography and component utilities
├── package.json                # Project configuration & scripts
└── vite.config.js              # Vite server & build configuration
```

---

## 🤖 Importing into Google AI Studio / GitHub

1. Drag and drop this folder or push it to a new GitHub repository.
2. Connect your GitHub repository to **Google AI Studio** (or your preferred IDE).
3. Continue editing and extending the project seamlessly!
