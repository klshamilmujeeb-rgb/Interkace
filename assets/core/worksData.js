/* ==========================================================================
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

export const MASTER_WORKS = [
  {
    "id": "travel-1",
    "num": "01",
    "slug": "voyage-private-escapes",
    "slideSlug": "slide-1",
    "title": "Voyage Private Escapes",
    "category": "Travel Agency",
    "categorySlug": "travel-agency",
    "subtitle": "Curated Luxury Expeditions & Island Sanctuaries",
    "year": "2025",
    "client": "Voyage Private Escapes Co.",
    "services": [
      "UI/UX Design",
      "Booking Engine",
      "Web Development"
    ],
    "type": "Curated Luxury Expeditions & Island Sanctuaries",
    "impact": "98% Satisfaction",
    "description": "Curated Luxury Expeditions & Island Sanctuaries crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-1.svg",
    "heroImage": "/assets/works/work-1.svg",
    "nextProject": "azure-riviera-yachting",
    "stats": [
      "98% Satisfaction",
      "40+ Destinations",
      "Private Charters"
    ],
    "gallery": [
      "/assets/works/work-1.svg",
      "/assets/works/work-2.svg"
    ]
  },
  {
    "id": "travel-2",
    "num": "02",
    "slug": "azure-riviera-yachting",
    "slideSlug": "slide-2",
    "title": "Azure Riviera Yachting",
    "category": "Travel Agency",
    "categorySlug": "travel-agency",
    "subtitle": "Mediterranean Coast Charter & Ultra-Luxury Villas",
    "year": "2024",
    "client": "Azure Riviera Yachting Co.",
    "services": [
      "UI/UX Design",
      "Booking Engine",
      "Web Development"
    ],
    "type": "Mediterranean Coast Charter & Ultra-Luxury Villas",
    "impact": "120+ Yachts",
    "description": "Mediterranean Coast Charter & Ultra-Luxury Villas crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-2.svg",
    "heroImage": "/assets/works/work-2.svg",
    "nextProject": "nordic-horizon-expeditions",
    "stats": [
      "120+ Yachts",
      "Monaco & Amalfi",
      "Concierge 24/7"
    ],
    "gallery": [
      "/assets/works/work-2.svg",
      "/assets/works/work-3.svg"
    ]
  },
  {
    "id": "travel-3",
    "num": "03",
    "slug": "nordic-horizon-expeditions",
    "slideSlug": "slide-3",
    "title": "Nordic Horizon Expeditions",
    "category": "Travel Agency",
    "categorySlug": "travel-agency",
    "subtitle": "Arctic Glaciers & Aurora Borealis Wilderness Retreats",
    "year": "2025",
    "client": "Nordic Horizon Expeditions Co.",
    "services": [
      "UI/UX Design",
      "Booking Engine",
      "Web Development"
    ],
    "type": "Arctic Glaciers & Aurora Borealis Wilderness Retreats",
    "impact": "Zero Emissions",
    "description": "Arctic Glaciers & Aurora Borealis Wilderness Retreats crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-3.svg",
    "heroImage": "/assets/works/work-3.svg",
    "nextProject": "nomad-safari-atlas",
    "stats": [
      "Zero Emissions",
      "Private Igloos",
      "Certified Guides"
    ],
    "gallery": [
      "/assets/works/work-3.svg",
      "/assets/works/work-4.svg"
    ]
  },
  {
    "id": "travel-4",
    "num": "04",
    "slug": "nomad-safari-atlas",
    "slideSlug": "slide-4",
    "title": "Nomad Safari Atlas",
    "category": "Travel Agency",
    "categorySlug": "travel-agency",
    "subtitle": "Immersive African Wildlife Safaris & Eco Lodges",
    "year": "2024",
    "client": "Nomad Safari Atlas Co.",
    "services": [
      "UI/UX Design",
      "Booking Engine",
      "Web Development"
    ],
    "type": "Immersive African Wildlife Safaris & Eco Lodges",
    "impact": "100% Eco-Certified",
    "description": "Immersive African Wildlife Safaris & Eco Lodges crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-4.svg",
    "heroImage": "/assets/works/work-4.svg",
    "nextProject": "solstice-sanctuaries",
    "stats": [
      "100% Eco-Certified",
      "Great Migration",
      "Bespoke Camps"
    ],
    "gallery": [
      "/assets/works/work-4.svg",
      "/assets/works/work-5.svg"
    ]
  },
  {
    "id": "travel-5",
    "num": "05",
    "slug": "solstice-sanctuaries",
    "slideSlug": "slide-5",
    "title": "Solstice Sanctuaries",
    "category": "Travel Agency",
    "categorySlug": "travel-agency",
    "subtitle": "Holistic Wellness Retreats & Secluded Hideaways",
    "year": "2025",
    "client": "Solstice Sanctuaries Co.",
    "services": [
      "UI/UX Design",
      "Booking Engine",
      "Web Development"
    ],
    "type": "Holistic Wellness Retreats & Secluded Hideaways",
    "impact": "Mindful Travel",
    "description": "Holistic Wellness Retreats & Secluded Hideaways crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-5.svg",
    "heroImage": "/assets/works/work-5.svg",
    "nextProject": "kombai-restaurant",
    "stats": [
      "Mindful Travel",
      "Ayurveda Masters",
      "Private Villas"
    ],
    "gallery": [
      "/assets/works/work-5.svg",
      "/assets/works/work-6.svg"
    ]
  },
  {
    "id": "restaurant-1",
    "num": "06",
    "slug": "kombai-restaurant",
    "slideSlug": "slide-6",
    "title": "Kombai Restaurant",
    "category": "Restaurant",
    "categorySlug": "restaurant",
    "subtitle": "Authentic Flavors, Timeless Dining Experience",
    "year": "2024",
    "client": "Kombai Restaurant Co.",
    "services": [
      "Brand Identity",
      "Interactive Menu",
      "Table Reservations"
    ],
    "type": "Authentic Flavors, Timeless Dining Experience",
    "impact": "Michelin Selected",
    "description": "Authentic Flavors, Timeless Dining Experience crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-6.svg",
    "heroImage": "/assets/works/work-6.svg",
    "nextProject": "aroma-specialty-coffee",
    "stats": [
      "Michelin Selected",
      "Seasonal Tasting",
      "Table Booking"
    ],
    "gallery": [
      "/assets/works/work-6.svg",
      "/assets/works/work-7.svg"
    ]
  },
  {
    "id": "restaurant-2",
    "num": "07",
    "slug": "aroma-specialty-coffee",
    "slideSlug": "slide-7",
    "title": "Aroma Coffee & Roastery",
    "category": "Restaurant",
    "categorySlug": "restaurant",
    "subtitle": "Bold Taste, Pure Passion Artisanal Single-Origin",
    "year": "2025",
    "client": "Aroma Coffee & Roastery Co.",
    "services": [
      "Brand Identity",
      "Interactive Menu",
      "Table Reservations"
    ],
    "type": "Bold Taste, Pure Passion Artisanal Single-Origin",
    "impact": "Single Origin",
    "description": "Bold Taste, Pure Passion Artisanal Single-Origin crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-7.svg",
    "heroImage": "/assets/works/work-7.svg",
    "nextProject": "latelier-french-bistro",
    "stats": [
      "Single Origin",
      "Cold Brew Lab",
      "Subscription Box"
    ],
    "gallery": [
      "/assets/works/work-7.svg",
      "/assets/works/work-8.svg"
    ]
  },
  {
    "id": "restaurant-3",
    "num": "08",
    "slug": "latelier-french-bistro",
    "slideSlug": "slide-8",
    "title": "L'Atelier Bistro",
    "category": "Restaurant",
    "categorySlug": "restaurant",
    "subtitle": "Contemporary French Gastronomy & Natural Wines",
    "year": "2024",
    "client": "L'Atelier Bistro Co.",
    "services": [
      "Brand Identity",
      "Interactive Menu",
      "Table Reservations"
    ],
    "type": "Contemporary French Gastronomy & Natural Wines",
    "impact": "7-Course Menu",
    "description": "Contemporary French Gastronomy & Natural Wines crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-8.svg",
    "heroImage": "/assets/works/work-8.svg",
    "nextProject": "botanica-farm-table",
    "stats": [
      "7-Course Menu",
      "Natural Cellar",
      "Chef's Counter"
    ],
    "gallery": [
      "/assets/works/work-8.svg",
      "/assets/works/work-9.svg"
    ]
  },
  {
    "id": "restaurant-4",
    "num": "09",
    "slug": "botanica-farm-table",
    "slideSlug": "slide-9",
    "title": "Botanica Table",
    "category": "Restaurant",
    "categorySlug": "restaurant",
    "subtitle": "Zero-Kilometer Organic Dining & Botanical Pairings",
    "year": "2025",
    "client": "Botanica Table Co.",
    "services": [
      "Brand Identity",
      "Interactive Menu",
      "Table Reservations"
    ],
    "type": "Zero-Kilometer Organic Dining & Botanical Pairings",
    "impact": "100% Organic",
    "description": "Zero-Kilometer Organic Dining & Botanical Pairings crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-9.svg",
    "heroImage": "/assets/works/work-9.svg",
    "nextProject": "umami-craft-kitchen",
    "stats": [
      "100% Organic",
      "Garden Sourced",
      "Fermentation Lab"
    ],
    "gallery": [
      "/assets/works/work-9.svg",
      "/assets/works/work-10.svg"
    ]
  },
  {
    "id": "restaurant-5",
    "num": "10",
    "slug": "umami-craft-kitchen",
    "slideSlug": "slide-1",
    "title": "Umami Craft Kitchen",
    "category": "Restaurant",
    "categorySlug": "restaurant",
    "subtitle": "Modern Japanese Robatayaki & Artisanal Ramen",
    "year": "2024",
    "client": "Umami Craft Kitchen Co.",
    "services": [
      "Brand Identity",
      "Interactive Menu",
      "Table Reservations"
    ],
    "type": "Modern Japanese Robatayaki & Artisanal Ramen",
    "impact": "Kyoto Broth",
    "description": "Modern Japanese Robatayaki & Artisanal Ramen crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-10.svg",
    "heroImage": "/assets/works/work-10.svg",
    "nextProject": "luxe-beauty-spa",
    "stats": [
      "Kyoto Broth",
      "Craft Sake Bar",
      "Omakase Room"
    ],
    "gallery": [
      "/assets/works/work-10.svg",
      "/assets/works/work-11.svg"
    ]
  },
  {
    "id": "salon-1",
    "num": "11",
    "slug": "luxe-beauty-spa",
    "slideSlug": "slide-2",
    "title": "Luxe Beauty & Spa",
    "category": "Salon",
    "categorySlug": "salon",
    "subtitle": "High-End Aesthetic Care & Holistic Skin Rejuvenation",
    "year": "2025",
    "client": "Luxe Beauty & Spa Co.",
    "services": [
      "Luxury Styling",
      "Custom Booking",
      "Design System"
    ],
    "type": "High-End Aesthetic Care & Holistic Skin Rejuvenation",
    "impact": "Bespoke Facials",
    "description": "High-End Aesthetic Care & Holistic Skin Rejuvenation crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-11.svg",
    "heroImage": "/assets/works/work-11.svg",
    "nextProject": "velvet-hair-studio",
    "stats": [
      "Bespoke Facials",
      "Organic Botanicals",
      "VIP Suites"
    ],
    "gallery": [
      "/assets/works/work-11.svg",
      "/assets/works/work-12.svg"
    ]
  },
  {
    "id": "salon-2",
    "num": "12",
    "slug": "velvet-hair-studio",
    "slideSlug": "slide-3",
    "title": "Velvet Hair Studio",
    "category": "Salon",
    "categorySlug": "salon",
    "subtitle": "Precision Cutting, Balayage Color Bar & Scalp Spa",
    "year": "2024",
    "client": "Velvet Hair Studio Co.",
    "services": [
      "Luxury Styling",
      "Custom Booking",
      "Design System"
    ],
    "type": "Precision Cutting, Balayage Color Bar & Scalp Spa",
    "impact": "Master Stylists",
    "description": "Precision Cutting, Balayage Color Bar & Scalp Spa crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-12.svg",
    "heroImage": "/assets/works/work-12.svg",
    "nextProject": "aura-aesthetics-clinic",
    "stats": [
      "Master Stylists",
      "Japanese Head Spa",
      "Custom Pigments"
    ],
    "gallery": [
      "/assets/works/work-12.svg",
      "/assets/works/work-13.svg"
    ]
  },
  {
    "id": "salon-3",
    "num": "13",
    "slug": "aura-aesthetics-clinic",
    "slideSlug": "slide-4",
    "title": "Aura Aesthetics Clinic",
    "category": "Salon",
    "categorySlug": "salon",
    "subtitle": "Medical Grade Skincare & Non-Invasive Anti-Aging",
    "year": "2025",
    "client": "Aura Aesthetics Clinic Co.",
    "services": [
      "Luxury Styling",
      "Custom Booking",
      "Design System"
    ],
    "type": "Medical Grade Skincare & Non-Invasive Anti-Aging",
    "impact": "Board Certified",
    "description": "Medical Grade Skincare & Non-Invasive Anti-Aging crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-13.svg",
    "heroImage": "/assets/works/work-13.svg",
    "nextProject": "noir-grooming-club",
    "stats": [
      "Board Certified",
      "Clinical Trials",
      "Custom Regimens"
    ],
    "gallery": [
      "/assets/works/work-13.svg",
      "/assets/works/work-14.svg"
    ]
  },
  {
    "id": "salon-4",
    "num": "14",
    "slug": "noir-grooming-club",
    "slideSlug": "slide-5",
    "title": "Noir Grooming Club",
    "category": "Salon",
    "categorySlug": "salon",
    "subtitle": "Modern Luxury Barber Lounge & Men's Apothecary",
    "year": "2024",
    "client": "Noir Grooming Club Co.",
    "services": [
      "Luxury Styling",
      "Custom Booking",
      "Design System"
    ],
    "type": "Modern Luxury Barber Lounge & Men's Apothecary",
    "impact": "Single Malt Bar",
    "description": "Modern Luxury Barber Lounge & Men's Apothecary crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-14.svg",
    "heroImage": "/assets/works/work-14.svg",
    "nextProject": "serene-nail-brow-bar",
    "stats": [
      "Single Malt Bar",
      "Italian Pomades",
      "Private Booths"
    ],
    "gallery": [
      "/assets/works/work-14.svg",
      "/assets/works/work-15.svg"
    ]
  },
  {
    "id": "salon-5",
    "num": "15",
    "slug": "serene-nail-brow-bar",
    "slideSlug": "slide-6",
    "title": "Serene Nail & Brow Bar",
    "category": "Salon",
    "categorySlug": "salon",
    "subtitle": "Non-Toxic Japanese Gel Art & Lash Micro-Sculpting",
    "year": "2025",
    "client": "Serene Nail & Brow Bar Co.",
    "services": [
      "Luxury Styling",
      "Custom Booking",
      "Design System"
    ],
    "type": "Non-Toxic Japanese Gel Art & Lash Micro-Sculpting",
    "impact": "10-Free Gels",
    "description": "Non-Toxic Japanese Gel Art & Lash Micro-Sculpting crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-15.svg",
    "heroImage": "/assets/works/work-15.svg",
    "nextProject": "maison-mode-couture",
    "stats": [
      "10-Free Gels",
      "Lash Lamination",
      "Sanitized Medical Care"
    ],
    "gallery": [
      "/assets/works/work-15.svg",
      "/assets/works/work-16.svg"
    ]
  },
  {
    "id": "clothing-1",
    "num": "16",
    "slug": "maison-mode-couture",
    "slideSlug": "slide-7",
    "title": "Maison Mode",
    "category": "Clothing",
    "categorySlug": "clothing",
    "subtitle": "Luxury Redefined Daily Haute Ready-to-Wear",
    "year": "2024",
    "client": "Maison Mode Co.",
    "services": [
      "E-Commerce",
      "Shopify Plus",
      "Visual Identity"
    ],
    "type": "Luxury Redefined Daily Haute Ready-to-Wear",
    "impact": "Italian Silk",
    "description": "Luxury Redefined Daily Haute Ready-to-Wear crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-16.svg",
    "heroImage": "/assets/works/work-16.svg",
    "nextProject": "haven-apparel-studio",
    "stats": [
      "Italian Silk",
      "Limited Run",
      "Virtual Runway"
    ],
    "gallery": [
      "/assets/works/work-16.svg",
      "/assets/works/work-17.svg"
    ]
  },
  {
    "id": "clothing-2",
    "num": "17",
    "slug": "haven-apparel-studio",
    "slideSlug": "slide-8",
    "title": "Haven Apparel",
    "category": "Clothing",
    "categorySlug": "clothing",
    "subtitle": "Where Style Meets Comfort Minimalist Essential Wear",
    "year": "2025",
    "client": "Haven Apparel Co.",
    "services": [
      "E-Commerce",
      "Shopify Plus",
      "Visual Identity"
    ],
    "type": "Where Style Meets Comfort Minimalist Essential Wear",
    "impact": "Organic Cotton",
    "description": "Where Style Meets Comfort Minimalist Essential Wear crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-17.svg",
    "heroImage": "/assets/works/work-17.svg",
    "nextProject": "vital-performance-wear",
    "stats": [
      "Organic Cotton",
      "Unisex Cuts",
      "Carbon Neutral"
    ],
    "gallery": [
      "/assets/works/work-17.svg",
      "/assets/works/work-18.svg"
    ]
  },
  {
    "id": "clothing-3",
    "num": "18",
    "slug": "vital-performance-wear",
    "slideSlug": "slide-9",
    "title": "Vital Sportswear",
    "category": "Clothing",
    "categorySlug": "clothing",
    "subtitle": "Fueling Performance Naturally Technical Activewear",
    "year": "2024",
    "client": "Vital Sportswear Co.",
    "services": [
      "E-Commerce",
      "Shopify Plus",
      "Visual Identity"
    ],
    "type": "Fueling Performance Naturally Technical Activewear",
    "impact": "Sweat-Wicking",
    "description": "Fueling Performance Naturally Technical Activewear crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-18.svg",
    "heroImage": "/assets/works/work-18.svg",
    "nextProject": "komorebi-linen-silk",
    "stats": [
      "Sweat-Wicking",
      "4-Way Stretch",
      "Zero Friction"
    ],
    "gallery": [
      "/assets/works/work-18.svg",
      "/assets/works/work-19.svg"
    ]
  },
  {
    "id": "clothing-4",
    "num": "19",
    "slug": "komorebi-linen-silk",
    "slideSlug": "slide-1",
    "title": "Komorebi Silk & Linen",
    "category": "Clothing",
    "categorySlug": "clothing",
    "subtitle": "Conscious Organic Fibers & Botanical Hand-Dyes",
    "year": "2025",
    "client": "Komorebi Silk & Linen Co.",
    "services": [
      "E-Commerce",
      "Shopify Plus",
      "Visual Identity"
    ],
    "type": "Conscious Organic Fibers & Botanical Hand-Dyes",
    "impact": "Hand Loomed",
    "description": "Conscious Organic Fibers & Botanical Hand-Dyes crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-19.svg",
    "heroImage": "/assets/works/work-19.svg",
    "nextProject": "atelier-heritage-denim",
    "stats": [
      "Hand Loomed",
      "Plant Dyed",
      "Fair Trade Certified"
    ],
    "gallery": [
      "/assets/works/work-19.svg",
      "/assets/works/work-20.svg"
    ]
  },
  {
    "id": "clothing-5",
    "num": "20",
    "slug": "atelier-heritage-denim",
    "slideSlug": "slide-2",
    "title": "Atelier Denim Co.",
    "category": "Clothing",
    "categorySlug": "clothing",
    "subtitle": "Custom Selvedge Denim & Tailored Indigo Heritage",
    "year": "2024",
    "client": "Atelier Denim Co. Co.",
    "services": [
      "E-Commerce",
      "Shopify Plus",
      "Visual Identity"
    ],
    "type": "Custom Selvedge Denim & Tailored Indigo Heritage",
    "impact": "14oz Raw Denim",
    "description": "Custom Selvedge Denim & Tailored Indigo Heritage crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-20.svg",
    "heroImage": "/assets/works/work-20.svg",
    "nextProject": "nexora-finance-app",
    "stats": [
      "14oz Raw Denim",
      "Custom Chainstitch",
      "Lifetime Repair"
    ],
    "gallery": [
      "/assets/works/work-20.svg",
      "/assets/works/work-21.svg"
    ]
  },
  {
    "id": "apps-1",
    "num": "21",
    "slug": "nexora-finance-app",
    "slideSlug": "slide-3",
    "title": "Nexora Finance",
    "category": "Mobile Apps",
    "categorySlug": "mobile-apps",
    "subtitle": "Invest Smarter, Grow Better Multi-Asset Wealth Tracking",
    "year": "2025",
    "client": "Nexora Finance Co.",
    "services": [
      "Product Design",
      "React Native",
      "Design Systems"
    ],
    "type": "Invest Smarter, Grow Better Multi-Asset Wealth Tracking",
    "impact": "Bank-Grade Encryption",
    "description": "Invest Smarter, Grow Better Multi-Asset Wealth Tracking crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-21.svg",
    "heroImage": "/assets/works/work-21.svg",
    "nextProject": "pulse-fitness-biometrics",
    "stats": [
      "Bank-Grade Encryption",
      "Real-Time Tickers",
      "Zero Commission"
    ],
    "gallery": [
      "/assets/works/work-21.svg",
      "/assets/works/work-22.svg"
    ]
  },
  {
    "id": "apps-2",
    "num": "22",
    "slug": "pulse-fitness-biometrics",
    "slideSlug": "slide-4",
    "title": "Pulse Fitness AI",
    "category": "Mobile Apps",
    "categorySlug": "mobile-apps",
    "subtitle": "Real-Time Biometrics & Dynamic Hypertrophy Coaching",
    "year": "2024",
    "client": "Pulse Fitness AI Co.",
    "services": [
      "Product Design",
      "React Native",
      "Design Systems"
    ],
    "type": "Real-Time Biometrics & Dynamic Hypertrophy Coaching",
    "impact": "HRV Analysis",
    "description": "Real-Time Biometrics & Dynamic Hypertrophy Coaching crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-22.svg",
    "heroImage": "/assets/works/work-22.svg",
    "nextProject": "zenith-spatial-tasks",
    "stats": [
      "HRV Analysis",
      "Voice Coaching",
      "Muscle Load Maps"
    ],
    "gallery": [
      "/assets/works/work-22.svg",
      "/assets/works/work-23.svg"
    ]
  },
  {
    "id": "apps-3",
    "num": "23",
    "slug": "zenith-spatial-tasks",
    "slideSlug": "slide-5",
    "title": "Zenith Task & Focus",
    "category": "Mobile Apps",
    "categorySlug": "mobile-apps",
    "subtitle": "Minimalist Flow-State Planner & Spatial Time-Boxing",
    "year": "2025",
    "client": "Zenith Task & Focus Co.",
    "services": [
      "Product Design",
      "React Native",
      "Design Systems"
    ],
    "type": "Minimalist Flow-State Planner & Spatial Time-Boxing",
    "impact": "Offline First",
    "description": "Minimalist Flow-State Planner & Spatial Time-Boxing crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-23.svg",
    "heroImage": "/assets/works/work-23.svg",
    "nextProject": "vault-crypto-wallet",
    "stats": [
      "Offline First",
      "Calendar 2-Way Sync",
      "Keyboard Flow"
    ],
    "gallery": [
      "/assets/works/work-23.svg",
      "/assets/works/work-24.svg"
    ]
  },
  {
    "id": "apps-4",
    "num": "24",
    "slug": "vault-crypto-wallet",
    "slideSlug": "slide-6",
    "title": "Vault Web3 Wallet",
    "category": "Mobile Apps",
    "categorySlug": "mobile-apps",
    "subtitle": "Self-Custodial Multi-Chain Asset & NFT Terminal",
    "year": "2024",
    "client": "Vault Web3 Wallet Co.",
    "services": [
      "Product Design",
      "React Native",
      "Design Systems"
    ],
    "type": "Self-Custodial Multi-Chain Asset & NFT Terminal",
    "impact": "Multi-Chain Bridge",
    "description": "Self-Custodial Multi-Chain Asset & NFT Terminal crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-24.svg",
    "heroImage": "/assets/works/work-24.svg",
    "nextProject": "soundscape-spatial-synth",
    "stats": [
      "Multi-Chain Bridge",
      "Zero-Knowledge Proofs",
      "Gasless Swaps"
    ],
    "gallery": [
      "/assets/works/work-24.svg",
      "/assets/works/work-25.svg"
    ]
  },
  {
    "id": "apps-5",
    "num": "25",
    "slug": "soundscape-spatial-synth",
    "slideSlug": "slide-7",
    "title": "SoundScape Studio",
    "category": "Mobile Apps",
    "categorySlug": "mobile-apps",
    "subtitle": "Generative Ambient Soundscapes & 3D Spatial Synthesizer",
    "year": "2025",
    "client": "SoundScape Studio Co.",
    "services": [
      "Product Design",
      "React Native",
      "Design Systems"
    ],
    "type": "Generative Ambient Soundscapes & 3D Spatial Synthesizer",
    "impact": "Dolby Atmos Sync",
    "description": "Generative Ambient Soundscapes & 3D Spatial Synthesizer crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-25.svg",
    "heroImage": "/assets/works/work-25.svg",
    "nextProject": "arcline-architects",
    "stats": [
      "Dolby Atmos Sync",
      "MIDI Controller",
      "Low Latency DSP"
    ],
    "gallery": [
      "/assets/works/work-25.svg",
      "/assets/works/work-26.svg"
    ]
  },
  {
    "id": "portfolio-1",
    "num": "26",
    "slug": "arcline-architects",
    "slideSlug": "slide-8",
    "title": "Arcline Architects",
    "category": "Portfolio",
    "categorySlug": "portfolio",
    "subtitle": "Crafting Spaces, Elevating Lives Architectural Showcase",
    "year": "2024",
    "client": "Arcline Architects Co.",
    "services": [
      "Creative Direction",
      "3D WebGL",
      "Headless CMS"
    ],
    "type": "Crafting Spaces, Elevating Lives Architectural Showcase",
    "impact": "RIBA Gold Medal",
    "description": "Crafting Spaces, Elevating Lives Architectural Showcase crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-26.svg",
    "heroImage": "/assets/works/work-26.svg",
    "nextProject": "softier-solutions-studio",
    "stats": [
      "RIBA Gold Medal",
      "48 Built Works",
      "3D CAD Blueprint Tour"
    ],
    "gallery": [
      "/assets/works/work-26.svg",
      "/assets/works/work-27.svg"
    ]
  },
  {
    "id": "portfolio-2",
    "num": "27",
    "slug": "softier-solutions-studio",
    "slideSlug": "slide-9",
    "title": "Softier Solutions",
    "category": "Portfolio",
    "categorySlug": "portfolio",
    "subtitle": "Digital Products That Drive Results Studio Showcase",
    "year": "2025",
    "client": "Softier Solutions Co.",
    "services": [
      "Creative Direction",
      "3D WebGL",
      "Headless CMS"
    ],
    "type": "Digital Products That Drive Results Studio Showcase",
    "impact": "$120M Raised",
    "description": "Digital Products That Drive Results Studio Showcase crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-27.svg",
    "heroImage": "/assets/works/work-27.svg",
    "nextProject": "elena-rostova-photography",
    "stats": [
      "$120M Raised",
      "14 Design Awards",
      "Full Stack Agile"
    ],
    "gallery": [
      "/assets/works/work-27.svg",
      "/assets/works/work-28.svg"
    ]
  },
  {
    "id": "portfolio-3",
    "num": "28",
    "slug": "elena-rostova-photography",
    "slideSlug": "slide-1",
    "title": "Elena Rostova Lens",
    "category": "Portfolio",
    "categorySlug": "portfolio",
    "subtitle": "Cinematic Fashion Editorial & High-Contrast Portraiture",
    "year": "2024",
    "client": "Elena Rostova Lens Co.",
    "services": [
      "Creative Direction",
      "3D WebGL",
      "Headless CMS"
    ],
    "type": "Cinematic Fashion Editorial & High-Contrast Portraiture",
    "impact": "Medium Format Film",
    "description": "Cinematic Fashion Editorial & High-Contrast Portraiture crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-28.svg",
    "heroImage": "/assets/works/work-28.svg",
    "nextProject": "studio-monolith-identity",
    "stats": [
      "Medium Format Film",
      "Paris Fashion Week",
      "Fine Art Prints"
    ],
    "gallery": [
      "/assets/works/work-28.svg",
      "/assets/works/work-29.svg"
    ]
  },
  {
    "id": "portfolio-4",
    "num": "29",
    "slug": "studio-monolith-identity",
    "slideSlug": "slide-2",
    "title": "Studio Monolith",
    "category": "Portfolio",
    "categorySlug": "portfolio",
    "subtitle": "3D Spatial Typography & Kinetic Brand Identity Systems",
    "year": "2025",
    "client": "Studio Monolith Co.",
    "services": [
      "Creative Direction",
      "3D WebGL",
      "Headless CMS"
    ],
    "type": "3D Spatial Typography & Kinetic Brand Identity Systems",
    "impact": "Cannes Lions Gold",
    "description": "3D Spatial Typography & Kinetic Brand Identity Systems crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-29.svg",
    "heroImage": "/assets/works/work-29.svg",
    "nextProject": "kinetix-motion-lab",
    "stats": [
      "Cannes Lions Gold",
      "Awwwards Site of Year",
      "Custom Type"
    ],
    "gallery": [
      "/assets/works/work-29.svg",
      "/assets/works/work-30.svg"
    ]
  },
  {
    "id": "portfolio-5",
    "num": "30",
    "slug": "kinetix-motion-lab",
    "slideSlug": "slide-3",
    "title": "Kinetix Motion Lab",
    "category": "Portfolio",
    "categorySlug": "portfolio",
    "subtitle": "High-Octane 3D Visual Effects & Product Animation",
    "year": "2024",
    "client": "Kinetix Motion Lab Co.",
    "services": [
      "Creative Direction",
      "3D WebGL",
      "Headless CMS"
    ],
    "type": "High-Octane 3D Visual Effects & Product Animation",
    "impact": "60fps WebGL",
    "description": "High-Octane 3D Visual Effects & Product Animation crafted with deliberate precision, refined typography, and high-performance interactive engineering.",
    "image": "/assets/works/work-30.svg",
    "heroImage": "/assets/works/work-30.svg",
    "nextProject": "voyage-private-escapes",
    "stats": [
      "60fps WebGL",
      "Raytraced Particles",
      "Virtual Production"
    ],
    "gallery": [
      "/assets/works/work-30.svg",
      "/assets/works/work-1.svg"
    ]
  }
];

export function getMasterProjectBySlug(slug) {
  if (!slug) return MASTER_WORKS[0];
  let norm = slug.toLowerCase().trim();
  let found = MASTER_WORKS.find(p => p.slug === norm || p.id === norm || p.slideSlug === norm);
  if (found) return found;

  // Try matching slide number
  let match = norm.match(/(?:slide-|work-)?(\d+)/);
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
  let norm = categorySlug.toLowerCase().replace(/\s+/g, '-');
  return MASTER_WORKS.filter(w => w.categorySlug === norm || w.category.toLowerCase().replace(/\s+/g, '-') === norm);
}
