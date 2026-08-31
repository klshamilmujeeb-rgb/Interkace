const fs = require('fs');
const path = require('path');

const outputDir = path.join(__dirname, '..', 'public', 'assets', 'works');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 30 Projects definition across 6 categories
const projects = [
  // 1. TRAVEL AGENCY (5 works)
  {
    id: "travel-1",
    slug: "voyage-private-escapes",
    title: "Voyage Private Escapes",
    category: "Travel Agency",
    categorySlug: "travel-agency",
    subtitle: "Curated Luxury Expeditions & Island Sanctuaries",
    bg: "linear-gradient(135deg, #0b1f2e 0%, #173852 100%)",
    accent: "#00c2ff",
    theme: "dark",
    cardType: "travel",
    heroText: "Bespoke Journeys.",
    tagline: "Explore Untamed Sanctuaries",
    stats: ["98% Satisfaction", "40+ Destinations", "Private Charters"]
  },
  {
    id: "travel-2",
    slug: "azure-riviera-yachting",
    title: "Azure Riviera Yachting",
    category: "Travel Agency",
    categorySlug: "travel-agency",
    subtitle: "Mediterranean Coast Charter & Ultra-Luxury Villas",
    bg: "linear-gradient(135deg, #071927 0%, #0d3859 100%)",
    accent: "#38bdf8",
    theme: "dark",
    cardType: "travel",
    heroText: "Sail The Azure.",
    tagline: "Mediterranean Private Fleet",
    stats: ["120+ Yachts", "Monaco & Amalfi", "Concierge 24/7"]
  },
  {
    id: "travel-3",
    slug: "nordic-horizon-expeditions",
    title: "Nordic Horizon Expeditions",
    category: "Travel Agency",
    categorySlug: "travel-agency",
    subtitle: "Arctic Glaciers & Aurora Borealis Wilderness Retreats",
    bg: "linear-gradient(135deg, #0e1e24 0%, #1e3a47 100%)",
    accent: "#2dd4bf",
    theme: "dark",
    cardType: "travel",
    heroText: "Arctic Solitude.",
    tagline: "Fjords, Glaciers & Northern Lights",
    stats: ["Zero Emissions", "Private Igloos", "Certified Guides"]
  },
  {
    id: "travel-4",
    slug: "nomad-safari-atlas",
    title: "Nomad Safari Atlas",
    category: "Travel Agency",
    categorySlug: "travel-agency",
    subtitle: "Immersive African Wildlife Safaris & Eco Lodges",
    bg: "linear-gradient(135deg, #24160c 0%, #4a2d18 100%)",
    accent: "#f59e0b",
    theme: "dark",
    cardType: "travel",
    heroText: "Wild Odyssey.",
    tagline: "Serengeti & Okavango Conservation",
    stats: ["100% Eco-Certified", "Great Migration", "Bespoke Camps"]
  },
  {
    id: "travel-5",
    slug: "solstice-sanctuaries",
    title: "Solstice Sanctuaries",
    category: "Travel Agency",
    categorySlug: "travel-agency",
    subtitle: "Holistic Wellness Retreats & Secluded Hideaways",
    bg: "linear-gradient(135deg, #18201a 0%, #2b3d32 100%)",
    accent: "#34d399",
    theme: "dark",
    cardType: "travel",
    heroText: "Deep Rejuvenation.",
    tagline: "Sacred Bali & Kyoto Wellness Havens",
    stats: ["Mindful Travel", "Ayurveda Masters", "Private Villas"]
  },

  // 2. RESTAURANT (5 works)
  {
    id: "restaurant-1",
    slug: "kombai-restaurant",
    title: "Kombai Restaurant",
    category: "Restaurant",
    categorySlug: "restaurant",
    subtitle: "Authentic Flavors, Timeless Dining Experience",
    bg: "linear-gradient(135deg, #1c1410 0%, #3d2215 100%)",
    accent: "#ff692e",
    theme: "warm",
    cardType: "restaurant",
    heroText: "Authentic Flavors.",
    tagline: "Heritage Pan-Asian Gastronomy",
    stats: ["Michelin Selected", "Seasonal Tasting", "Table Booking"]
  },
  {
    id: "restaurant-2",
    slug: "aroma-specialty-coffee",
    title: "Aroma Coffee & Roastery",
    category: "Restaurant",
    categorySlug: "restaurant",
    subtitle: "Bold Taste, Pure Passion Artisanal Single-Origin",
    bg: "linear-gradient(135deg, #1f1510 0%, #362218 100%)",
    accent: "#ea580c",
    theme: "warm",
    cardType: "restaurant",
    heroText: "Bold Taste.",
    tagline: "Artisanal Roasts & Direct Trade",
    stats: ["Single Origin", "Cold Brew Lab", "Subscription Box"]
  },
  {
    id: "restaurant-3",
    slug: "latelier-french-bistro",
    title: "L'Atelier Bistro",
    category: "Restaurant",
    categorySlug: "restaurant",
    subtitle: "Contemporary French Gastronomy & Natural Wines",
    bg: "linear-gradient(135deg, #17111a 0%, #311c38 100%)",
    accent: "#ec4899",
    theme: "dark",
    cardType: "restaurant",
    heroText: "Haute Cuisine.",
    tagline: "Parisian Elegance, Modern Craft",
    stats: ["7-Course Menu", "Natural Cellar", "Chef's Counter"]
  },
  {
    id: "restaurant-4",
    slug: "botanica-farm-table",
    title: "Botanica Table",
    category: "Restaurant",
    categorySlug: "restaurant",
    subtitle: "Zero-Kilometer Organic Dining & Botanical Pairings",
    bg: "linear-gradient(135deg, #121c14 0%, #203b25 100%)",
    accent: "#22c55e",
    theme: "dark",
    cardType: "restaurant",
    heroText: "Living Food.",
    tagline: "Regenerative Farm-to-Table",
    stats: ["100% Organic", "Garden Sourced", "Fermentation Lab"]
  },
  {
    id: "restaurant-5",
    slug: "umami-craft-kitchen",
    title: "Umami Craft Kitchen",
    category: "Restaurant",
    categorySlug: "restaurant",
    subtitle: "Modern Japanese Robatayaki & Artisanal Ramen",
    bg: "linear-gradient(135deg, #1c1111 0%, #3b1c1c 100%)",
    accent: "#f43f5e",
    theme: "dark",
    cardType: "restaurant",
    heroText: "Soul of Umami.",
    tagline: "Bincho-tan Grill & Handmade Noodles",
    stats: ["Kyoto Broth", "Craft Sake Bar", "Omakase Room"]
  },

  // 3. SALON (5 works)
  {
    id: "salon-1",
    slug: "luxe-beauty-spa",
    title: "Luxe Beauty & Spa",
    category: "Salon",
    categorySlug: "salon",
    subtitle: "High-End Aesthetic Care & Holistic Skin Rejuvenation",
    bg: "linear-gradient(135deg, #24161c 0%, #472132 100%)",
    accent: "#f472b6",
    theme: "dark",
    cardType: "salon",
    heroText: "Luminous Skin.",
    tagline: "Advanced Dermatological Rituals",
    stats: ["Bespoke Facials", "Organic Botanicals", "VIP Suites"]
  },
  {
    id: "salon-2",
    slug: "velvet-hair-studio",
    title: "Velvet Hair Studio",
    category: "Salon",
    categorySlug: "salon",
    subtitle: "Precision Cutting, Balayage Color Bar & Scalp Spa",
    bg: "linear-gradient(135deg, #1a1622 0%, #302445 100%)",
    accent: "#a855f7",
    theme: "dark",
    cardType: "salon",
    heroText: "Art of Hair.",
    tagline: "Couture Styling & Color Mastery",
    stats: ["Master Stylists", "Japanese Head Spa", "Custom Pigments"]
  },
  {
    id: "salon-3",
    slug: "aura-aesthetics-clinic",
    title: "Aura Aesthetics Clinic",
    category: "Salon",
    categorySlug: "salon",
    subtitle: "Medical Grade Skincare & Non-Invasive Anti-Aging",
    bg: "linear-gradient(135deg, #111a1f 0%, #1e3542 100%)",
    accent: "#38bdf8",
    theme: "dark",
    cardType: "salon",
    heroText: "Ageless Glow.",
    tagline: "Laser, Peptide & Cellular Renewal",
    stats: ["Board Certified", "Clinical Trials", "Custom Regimens"]
  },
  {
    id: "salon-4",
    slug: "noir-grooming-club",
    title: "Noir Grooming Club",
    category: "Salon",
    categorySlug: "salon",
    subtitle: "Modern Luxury Barber Lounge & Men's Apothecary",
    bg: "linear-gradient(135deg, #141416 0%, #26272e 100%)",
    accent: "#d4af37",
    theme: "dark",
    cardType: "salon",
    heroText: "Refined Craft.",
    tagline: "Hot Towel Shaves & Beard Artistry",
    stats: ["Single Malt Bar", "Italian Pomades", "Private Booths"]
  },
  {
    id: "salon-5",
    slug: "serene-nail-brow-bar",
    title: "Serene Nail & Brow Bar",
    category: "Salon",
    categorySlug: "salon",
    subtitle: "Non-Toxic Japanese Gel Art & Lash Micro-Sculpting",
    bg: "linear-gradient(135deg, #1f181c 0%, #3d2b35 100%)",
    accent: "#fb7185",
    theme: "dark",
    cardType: "salon",
    heroText: "Pure Elegance.",
    tagline: "Clean Beauty & Hand-Painted Nail Art",
    stats: ["10-Free Gels", "Lash Lamination", "Sanitized Medical Care"]
  },

  // 4. CLOTHING (5 works)
  {
    id: "clothing-1",
    slug: "maison-mode-couture",
    title: "Maison Mode",
    category: "Clothing",
    categorySlug: "clothing",
    subtitle: "Luxury Redefined Daily Haute Ready-to-Wear",
    bg: "linear-gradient(135deg, #211c19 0%, #3b2e25 100%)",
    accent: "#d97706",
    theme: "warm",
    cardType: "clothing",
    heroText: "Luxury Redefined.",
    tagline: "Fall / Winter Capsule Collection",
    stats: ["Italian Silk", "Limited Run", "Virtual Runway"]
  },
  {
    id: "clothing-2",
    slug: "haven-apparel-studio",
    title: "Haven Apparel",
    category: "Clothing",
    categorySlug: "clothing",
    subtitle: "Where Style Meets Comfort Minimalist Essential Wear",
    bg: "linear-gradient(135deg, #17181c 0%, #292d38 100%)",
    accent: "#ff692e",
    theme: "dark",
    cardType: "clothing",
    heroText: "Style & Comfort.",
    tagline: "Architectural Cut & Heavyweight Cottons",
    stats: ["Organic Cotton", "Unisex Cuts", "Carbon Neutral"]
  },
  {
    id: "clothing-3",
    slug: "vital-performance-wear",
    title: "Vital Sportswear",
    category: "Clothing",
    categorySlug: "clothing",
    subtitle: "Fueling Performance Naturally Technical Activewear",
    bg: "linear-gradient(135deg, #261208 0%, #4a1f0a 100%)",
    accent: "#ff4405",
    theme: "dark",
    cardType: "clothing",
    heroText: "Peak Output.",
    tagline: "Aerodynamic & Temperature-Adaptive",
    stats: ["Sweat-Wicking", "4-Way Stretch", "Zero Friction"]
  },
  {
    id: "clothing-4",
    slug: "komorebi-linen-silk",
    title: "Komorebi Silk & Linen",
    category: "Clothing",
    categorySlug: "clothing",
    subtitle: "Conscious Organic Fibers & Botanical Hand-Dyes",
    bg: "linear-gradient(135deg, #191c16 0%, #2e3828 100%)",
    accent: "#84cc16",
    theme: "dark",
    cardType: "clothing",
    heroText: "Breathe In Linen.",
    tagline: "Japanese Wabi-Sabi Aesthetics",
    stats: ["Hand Loomed", "Plant Dyed", "Fair Trade Certified"]
  },
  {
    id: "clothing-5",
    slug: "atelier-heritage-denim",
    title: "Atelier Denim Co.",
    category: "Clothing",
    categorySlug: "clothing",
    subtitle: "Custom Selvedge Denim & Tailored Indigo Heritage",
    bg: "linear-gradient(135deg, #0c1826 0%, #162f4d 100%)",
    accent: "#60a5fa",
    theme: "dark",
    cardType: "clothing",
    heroText: "Selvedge Indigo.",
    tagline: "Shuttle Looms of Okayama",
    stats: ["14oz Raw Denim", "Custom Chainstitch", "Lifetime Repair"]
  },

  // 5. MOBILE APPS (5 works)
  {
    id: "apps-1",
    slug: "nexora-finance-app",
    title: "Nexora Finance",
    category: "Mobile Apps",
    categorySlug: "mobile-apps",
    subtitle: "Invest Smarter, Grow Better Multi-Asset Wealth Tracking",
    bg: "linear-gradient(135deg, #0d1a16 0%, #15382c 100%)",
    accent: "#10b981",
    theme: "dark",
    cardType: "mobile",
    heroText: "Invest Smarter.",
    tagline: "AI Portfolio Rebalancing & Yield Analytics",
    stats: ["Bank-Grade Encryption", "Real-Time Tickers", "Zero Commission"]
  },
  {
    id: "apps-2",
    slug: "pulse-fitness-biometrics",
    title: "Pulse Fitness AI",
    category: "Mobile Apps",
    categorySlug: "mobile-apps",
    subtitle: "Real-Time Biometrics & Dynamic Hypertrophy Coaching",
    bg: "linear-gradient(135deg, #240f1a 0%, #471933 100%)",
    accent: "#f43f5e",
    theme: "dark",
    cardType: "mobile",
    heroText: "Track Your Pulse.",
    tagline: "Apple Watch & Whoop Sensor Sync",
    stats: ["HRV Analysis", "Voice Coaching", "Muscle Load Maps"]
  },
  {
    id: "apps-3",
    slug: "zenith-spatial-tasks",
    title: "Zenith Task & Focus",
    category: "Mobile Apps",
    categorySlug: "mobile-apps",
    subtitle: "Minimalist Flow-State Planner & Spatial Time-Boxing",
    bg: "linear-gradient(135deg, #131424 0%, #232545 100%)",
    accent: "#818cf8",
    theme: "dark",
    cardType: "mobile",
    heroText: "Pure Focus.",
    tagline: "Binaural Beats & Frictionless Input",
    stats: ["Offline First", "Calendar 2-Way Sync", "Keyboard Flow"]
  },
  {
    id: "apps-4",
    slug: "vault-crypto-wallet",
    title: "Vault Web3 Wallet",
    category: "Mobile Apps",
    categorySlug: "mobile-apps",
    subtitle: "Self-Custodial Multi-Chain Asset & NFT Terminal",
    bg: "linear-gradient(135deg, #141724 0%, #202640 100%)",
    accent: "#38bdf8",
    theme: "dark",
    cardType: "mobile",
    heroText: "True Ownership.",
    tagline: "Hardware Enclave & Social Recovery",
    stats: ["Multi-Chain Bridge", "Zero-Knowledge Proofs", "Gasless Swaps"]
  },
  {
    id: "apps-5",
    slug: "soundscape-spatial-synth",
    title: "SoundScape Studio",
    category: "Mobile Apps",
    categorySlug: "mobile-apps",
    subtitle: "Generative Ambient Soundscapes & 3D Spatial Synthesizer",
    bg: "linear-gradient(135deg, #1a0f26 0%, #341a4f 100%)",
    accent: "#c084fc",
    theme: "dark",
    cardType: "mobile",
    heroText: "Spatial Sound.",
    tagline: "Binaural 3D Acoustics & Audio Nodes",
    stats: ["Dolby Atmos Sync", "MIDI Controller", "Low Latency DSP"]
  },

  // 6. PORTFOLIO (5 works)
  {
    id: "portfolio-1",
    slug: "arcline-architects",
    title: "Arcline Architects",
    category: "Portfolio",
    categorySlug: "portfolio",
    subtitle: "Crafting Spaces, Elevating Lives Architectural Showcase",
    bg: "linear-gradient(135deg, #1a1b20 0%, #2e303b 100%)",
    accent: "#ffffff",
    theme: "light-accent",
    cardType: "portfolio",
    heroText: "Crafting Spaces.",
    tagline: "Brutalist & Minimalist Residential Works",
    stats: ["RIBA Gold Medal", "48 Built Works", "3D CAD Blueprint Tour"]
  },
  {
    id: "portfolio-2",
    slug: "softier-solutions-studio",
    title: "Softier Solutions",
    category: "Portfolio",
    categorySlug: "portfolio",
    subtitle: "Digital Products That Drive Results Studio Showcase",
    bg: "linear-gradient(135deg, #151a24 0%, #242f45 100%)",
    accent: "#38bdf8",
    theme: "dark",
    cardType: "portfolio",
    heroText: "Drive Results.",
    tagline: "Enterprise Software & Design Systems",
    stats: ["$120M Raised", "14 Design Awards", "Full Stack Agile"]
  },
  {
    id: "portfolio-3",
    slug: "elena-rostova-photography",
    title: "Elena Rostova Lens",
    category: "Portfolio",
    categorySlug: "portfolio",
    subtitle: "Cinematic Fashion Editorial & High-Contrast Portraiture",
    bg: "linear-gradient(135deg, #1c1418 0%, #36222c 100%)",
    accent: "#f472b6",
    theme: "dark",
    cardType: "portfolio",
    heroText: "Cinematic Light.",
    tagline: "Vogue & Harper's Bazaar Retrospective",
    stats: ["Medium Format Film", "Paris Fashion Week", "Fine Art Prints"]
  },
  {
    id: "portfolio-4",
    slug: "studio-monolith-identity",
    title: "Studio Monolith",
    category: "Portfolio",
    categorySlug: "portfolio",
    subtitle: "3D Spatial Typography & Kinetic Brand Identity Systems",
    bg: "linear-gradient(135deg, #141418 0%, #272833 100%)",
    accent: "#ff692e",
    theme: "dark",
    cardType: "portfolio",
    heroText: "Kinetic Identity.",
    tagline: "Generative WebGL & Custom Typefoundry",
    stats: ["Cannes Lions Gold", "Awwwards Site of Year", "Custom Type"]
  },
  {
    id: "portfolio-5",
    slug: "kinetix-motion-lab",
    title: "Kinetix Motion Lab",
    category: "Portfolio",
    categorySlug: "portfolio",
    subtitle: "High-Octane 3D Visual Effects & Product Animation",
    bg: "linear-gradient(135deg, #1a1622 0%, #36284a 100%)",
    accent: "#a855f7",
    theme: "dark",
    cardType: "portfolio",
    heroText: "Motion in 3D.",
    tagline: "Unreal Engine 5 & Houdini Simulations",
    stats: ["60fps WebGL", "Raytraced Particles", "Virtual Production"]
  }
];

function generateSvgCard(project, index) {
  const num = (index + 1).toString().padStart(2, '0');
  const accent = project.accent || '#ff692e';
  const category = project.category;
  
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
    <defs>
      <linearGradient id="bg-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${project.theme === 'warm' ? '#1f1612' : '#0f131a'}"/>
        <stop offset="50%" stop-color="${project.theme === 'warm' ? '#2c1e18' : '#171d27'}"/>
        <stop offset="100%" stop-color="${project.theme === 'warm' ? '#140e0b' : '#0b0e14'}"/>
      </linearGradient>
      <linearGradient id="glow-${index}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${accent}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="cardSurface" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.08"/>
        <stop offset="100%" stop-color="#ffffff" stop-opacity="0.02"/>
      </linearGradient>
      <pattern id="gridPattern" width="32" height="32" patternUnits="userSpaceOnUse">
        <path d="M 32 0 L 0 0 0 32" fill="none" stroke="rgba(255,255,255,0.03)" stroke-width="1"/>
      </pattern>
      <filter id="blurFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="40"/>
      </filter>
    </defs>

    <!-- Background Canvas -->
    <rect width="100%" height="100%" fill="url(#bg-${index})"/>
    <rect width="100%" height="100%" fill="url(#gridPattern)"/>

    <!-- Subtle Ambient Glow -->
    <circle cx="700" cy="100" r="220" fill="url(#glow-${index})" filter="url(#blurFilter)"/>
    <circle cx="100" cy="400" r="180" fill="url(#glow-${index})" filter="url(#blurFilter)"/>

    <!-- Inner Mockup UI Frame -->
    <g transform="translate(32, 28)">
      <!-- Frame Backdrop -->
      <rect width="736" height="444" rx="20" fill="url(#cardSurface)" stroke="rgba(255,255,255,0.12)" stroke-width="1.2"/>
      
      <!-- Top Browser/App Bar -->
      <g transform="translate(24, 20)">
        <circle cx="8" cy="8" r="5" fill="#ff5f56"/>
        <circle cx="26" cy="8" r="5" fill="#ffbd2e"/>
        <circle cx="44" cy="8" r="5" fill="#27c93f"/>
        <rect x="70" y="0" width="240" height="16" rx="8" fill="rgba(255,255,255,0.06)"/>
        <text x="82" y="12" font-family="'Ubuntu', 'Inter', sans-serif" font-size="9" fill="rgba(255,255,255,0.4)">${project.slug}.interkace.design</text>
        
        <!-- Category Badge -->
        <rect x="530" y="-4" width="150" height="24" rx="12" fill="${accent}" fill-opacity="0.16" stroke="${accent}" stroke-opacity="0.4"/>
        <text x="605" y="12" font-family="'Ubuntu', sans-serif" font-weight="600" font-size="10.5" fill="${accent}" text-anchor="middle" letter-spacing="0.5">${category.toUpperCase()}</text>
      </g>

      <!-- Main Visual Mockup Content -->
      <g transform="translate(36, 72)">
        <!-- Brand Wordmark / Header -->
        <text x="0" y="32" font-family="'Ubuntu', sans-serif" font-weight="800" font-size="28" fill="#ffffff" letter-spacing="-0.5">${project.title}</text>
        <text x="0" y="58" font-family="'Ubuntu', sans-serif" font-weight="500" font-size="13" fill="rgba(255,255,255,0.6)">${project.subtitle}</text>

        <!-- Big Hero Visual Block -->
        <g transform="translate(0, 84)">
          <rect width="664" height="200" rx="16" fill="rgba(0,0,0,0.4)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
          
          <!-- Decorative Graphic Lines & UI Preview -->
          <path d="M 24 150 Q 180 40, 340 100 T 640 60" fill="none" stroke="${accent}" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
          <path d="M 24 165 Q 180 70, 340 125 T 640 85" fill="none" stroke="${accent}" stroke-width="1.5" stroke-dasharray="4,4" opacity="0.4"/>
          
          <!-- Hero Headline Inside Mockup -->
          <text x="32" y="54" font-family="'Ubuntu', sans-serif" font-weight="800" font-size="24" fill="#ffffff">${project.heroText}</text>
          <text x="32" y="80" font-family="'Ubuntu', sans-serif" font-weight="500" font-size="13" fill="rgba(255,255,255,0.7)">${project.tagline}</text>
          
          <!-- Key Feature Badges -->
          <g transform="translate(32, 115)">
            ${project.stats.map((stat, i) => `
              <g transform="translate(${i * 190}, 0)">
                <rect width="176" height="38" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)"/>
                <circle cx="16" cy="19" r="4" fill="${accent}"/>
                <text x="30" y="23" font-family="'Ubuntu', sans-serif" font-weight="600" font-size="11.5" fill="#ffffff">${stat}</text>
              </g>
            `).join('')}
          </g>
        </g>

        <!-- Bottom Status Bar -->
        <g transform="translate(0, 304)">
          <text x="0" y="24" font-family="'Ubuntu', monospace" font-size="11" fill="rgba(255,255,255,0.35)" letter-spacing="1">PROJECT REF: ${num} // ${project.id.toUpperCase()}</text>
          <text x="664" y="24" font-family="'Ubuntu', sans-serif" font-weight="600" font-size="12" fill="${accent}" text-anchor="end">VIEW CASE STUDY ↗</text>
        </g>
      </g>
    </g>
  </svg>`;
}

// Write files
projects.forEach((proj, idx) => {
  const svgContent = generateSvgCard(proj, idx);
  const fileName = `work-${idx + 1}.svg`;
  fs.writeFileSync(path.join(outputDir, fileName), svgContent, 'utf-8');
});

// Also create a JSON export for the master dataset
const masterDataFile = path.join(__dirname, '..', 'assets', 'core', 'worksData.js');
const jsContent = `/* ==========================================================================
   MASTER 30-WORK PORTFOLIO DATASET (6 Categories x 5 Works = 30 Master Works)
   Centralized Single Source of Truth
   ========================================================================== */

export const CATEGORIES = [
  { slug: "travel-agency", name: "Travel Agency", label: "Travel Agency", count: 5, icon: "plane", description: "Bespoke digital platforms, high-conversion booking engines, and immersive luxury travel experiences." },
  { slug: "restaurant", name: "Restaurant", label: "Restaurant", count: 5, icon: "utensils", description: "Artisanal culinary showcases, digital reservations, interactive menus, and gastronomic storytelling." },
  { slug: "salon", name: "Salon", label: "Salon", count: 5, icon: "sparkles", description: "Luxury beauty studios, dermatology clinics, bespoke booking systems, and aesthetic brand identities." },
  { slug: "clothing", name: "Clothing", label: "Clothing", count: 5, icon: "shirt", description: "High-fashion e-commerce storefronts, digital runway lookbooks, and sustainable apparel branding." },
  { slug: "mobile-apps", name: "Mobile Apps", label: "Mobile Apps", count: 5, icon: "smartphone", description: "Intuitive mobile interfaces, real-time fintech dashboards, spatial health apps, and digital products." },
  { slug: "portfolio", name: "Portfolio", label: "Portfolio", count: 5, icon: "layout", description: "High-contrast creative portfolios, architectural showcases, photography retrospectives, and studios." }
];

export const MASTER_WORKS = ${JSON.stringify(projects.map((p, idx) => {
  const nextIdx = (idx + 1) % projects.length;
  return {
    id: p.id,
    num: (idx + 1).toString().padStart(2, '0'),
    slug: p.slug,
    slideSlug: "slide-" + (((idx) % 9) + 1),
    title: p.title,
    category: p.category,
    categorySlug: p.categorySlug,
    subtitle: p.subtitle,
    year: p.year || (idx % 2 === 0 ? "2025" : "2024"),
    client: p.title + " Co.",
    services: p.category === "Travel Agency" ? ["UI/UX Design", "Booking Engine", "Web Development"] :
              p.category === "Restaurant" ? ["Brand Identity", "Interactive Menu", "Table Reservations"] :
              p.category === "Salon" ? ["Luxury Styling", "Custom Booking", "Design System"] :
              p.category === "Clothing" ? ["E-Commerce", "Shopify Plus", "Visual Identity"] :
              p.category === "Mobile Apps" ? ["Product Design", "React Native", "Design Systems"] :
              ["Creative Direction", "3D WebGL", "Headless CMS"],
    type: p.subtitle,
    impact: p.stats ? p.stats[0] : "+120% Conversion",
    description: p.subtitle + " crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    image: "/assets/works/work-" + (idx + 1) + ".svg",
    heroImage: "/assets/works/work-" + (idx + 1) + ".svg",
    nextProject: projects[nextIdx].slug,
    stats: p.stats || ["High Performance", "Custom Design", "Full Stack"],
    gallery: [
      "/assets/works/work-" + (idx + 1) + ".svg",
      "/assets/works/work-" + (nextIdx + 1) + ".svg"
    ]
  };
}), null, 2)};

export function getMasterProjectBySlug(slug) {
  if (!slug) return MASTER_WORKS[0];
  let norm = slug.toLowerCase().trim();
  let found = MASTER_WORKS.find(p => p.slug === norm || p.id === norm || p.slideSlug === norm);
  if (found) return found;

  // Try matching slide number
  let match = norm.match(/(?:slide-|work-)?(\\d+)/);
  if (match) {
    let num = parseInt(match[1], 10);
    let idx = (num - 1) % MASTER_WORKS.length;
    if (idx >= 0 && idx < MASTER_WORKS.length) {
      return MASTER_WORKS[idx];
    }
  }

  // Fallback
  return MASTER_WORKS[0];
}

export function getWorksByCategory(categorySlug) {
  if (!categorySlug || categorySlug === "all") return MASTER_WORKS;
  let norm = categorySlug.toLowerCase().replace(/\\s+/g, '-');
  return MASTER_WORKS.filter(w => w.categorySlug === norm || w.category.toLowerCase().replace(/\\s+/g, '-') === norm);
}
`;

fs.writeFileSync(masterDataFile, jsContent, 'utf-8');
console.log('Successfully generated 30 SVGs in public/assets/works/ and assets/core/worksData.js');
