const fs = require('fs');

let content = fs.readFileSync('assets/core/index.js', 'utf8');

let startIndex = content.indexOf('function ProjectDetailPage({ slug, onBack, onNext }) {');
let endIndex = content.indexOf('function ct(){');

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find ProjectDetailPage bounds');
    process.exit(1);
}

let newFunction = `function ProjectDetailPage({ slug, onBack, onNext }) {
  let isMobile = W();
  let p = getProjectBySlug(slug);
  let [isScrolled, setIsScrolled] = o.useState(false);

  o.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    let onScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  return (0, x.jsxs)('div', {
    style: { background: _V, minHeight: '100vh', width: '100%', overflowX: 'hidden', color: '#121212', fontFamily: _L },
    children: [
      (0, x.jsx)('nav', {
        style: {
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: isMobile ? '16px 20px' : '20px 40px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: isScrolled ? 'rgba(255,251,206,0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease'
        },
        children: (0, x.jsxs)('div', {
          style: { display: 'flex', alignItems: 'center', gap: 20 },
          children: [
            (0, x.jsx)('button', {
              onClick: onBack,
              style: {
                background: 'rgba(0,0,0,0.05)', border: 'none', borderRadius: 40,
                padding: isMobile ? '8px 16px' : '10px 20px', fontFamily: _L, fontWeight: 600, fontSize: isMobile ? 14 : 16,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8
              },
              children: [
                (0, x.jsx)('svg', { width: isMobile ? 14 : 16, height: isMobile ? 14 : 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, children: (0, x.jsx)('path', { d: "M19 12H5M12 19l-7-7 7-7" }) }),
                "Back to Works"
              ]
            })
          ]
        })
      }),
      (0, x.jsxs)('section', {
        style: { paddingTop: isMobile ? 100 : 120, paddingBottom: isMobile ? 40 : 80, paddingLeft: isMobile ? '20px' : '5%', paddingRight: isMobile ? '20px' : '5%', maxWidth: 1400, margin: '0 auto' },
        children: [
          (0, x.jsx)('div', {
            style: { textTransform: 'uppercase', fontFamily: _F, fontSize: isMobile ? 12 : 14, fontWeight: 700, color: _R, letterSpacing: '0.05em', marginBottom: isMobile ? 16 : 20 },
            children: p.category
          }),
          (0, x.jsx)('h1', {
            style: { fontFamily: _L, fontSize: 'clamp(40px, 10vw, 96px)', fontWeight: 800, lineHeight: 1.1, margin: isMobile ? '0 0 24px 0' : '0 0 40px 0', wordBreak: 'break-word' },
            children: p.title
          }),
          (0, x.jsx)('p', {
            style: { fontFamily: _F, fontSize: 'clamp(16px, 4vw, 24px)', fontWeight: 500, lineHeight: 1.5, color: '#444', maxWidth: 800, marginBottom: isMobile ? 40 : 60 },
            children: p.description
          }),
          (0, x.jsxs)('div', {
            style: { display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(auto-fit, minmax(150px, 1fr))', gap: isMobile ? 24 : 40, borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: isMobile ? 32 : 40, marginBottom: isMobile ? 48 : 80 },
            children: [
              (0, x.jsxs)('div', { children: [(0, x.jsx)('div', { style: { fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 8, textTransform: 'uppercase' }, children: "Year" }), (0, x.jsx)('div', { style: { fontSize: isMobile ? 16 : 18, fontWeight: 600 }, children: p.year })] }),
              (0, x.jsxs)('div', { children: [(0, x.jsx)('div', { style: { fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 8, textTransform: 'uppercase' }, children: "Services" }), (0, x.jsx)('div', { style: { fontSize: isMobile ? 16 : 18, fontWeight: 600 }, children: p.services.join(', ') })] }),
              (0, x.jsxs)('div', { style: { gridColumn: isMobile ? '1 / -1' : 'auto' }, children: [(0, x.jsx)('div', { style: { fontSize: 12, fontWeight: 700, color: '#888', marginBottom: 8, textTransform: 'uppercase' }, children: "Type" }), (0, x.jsx)('div', { style: { fontSize: isMobile ? 16 : 18, fontWeight: 600 }, children: p.type })] })
            ]
          }),
          (0, x.jsx)('div', {
            style: { width: '100%', height: isMobile ? '50vh' : '70vh', minHeight: isMobile ? 300 : 400, borderRadius: isMobile ? 16 : 24, overflow: 'hidden', background: '#e0e0e0' },
            children: (0, x.jsx)('img', { src: p.heroImage, style: { width: '100%', height: '100%', objectFit: 'cover' } })
          })
        ]
      }),
      (0, x.jsxs)('section', {
        style: { padding: isMobile ? '40px 20px' : '80px 5%', maxWidth: 1000, margin: '0 auto' },
        children: [
          (0, x.jsxs)('div', {
            style: { marginBottom: isMobile ? 48 : 80 },
            children: [
              (0, x.jsx)('h2', { style: { fontFamily: _L, fontSize: isMobile ? 28 : 32, fontWeight: 800, marginBottom: isMobile ? 16 : 24 }, children: "Overview" }),
              (0, x.jsx)('p', { style: { fontFamily: _F, fontSize: isMobile ? 16 : 18, lineHeight: 1.6, color: '#333' }, children: p.overview })
            ]
          }),
          (0, x.jsxs)('div', {
            style: { marginBottom: isMobile ? 48 : 80 },
            children: [
              (0, x.jsx)('h2', { style: { fontFamily: _L, fontSize: isMobile ? 28 : 32, fontWeight: 800, marginBottom: isMobile ? 16 : 24 }, children: "The Challenge" }),
              (0, x.jsx)('p', { style: { fontFamily: _F, fontSize: isMobile ? 16 : 18, lineHeight: 1.6, color: '#333' }, children: p.challenge })
            ]
          }),
          (0, x.jsxs)('div', {
            style: { marginBottom: isMobile ? 48 : 80 },
            children: [
              (0, x.jsx)('h2', { style: { fontFamily: _L, fontSize: isMobile ? 28 : 32, fontWeight: 800, marginBottom: isMobile ? 16 : 24 }, children: "Approach" }),
              (0, x.jsx)('p', { style: { fontFamily: _F, fontSize: isMobile ? 16 : 18, lineHeight: 1.6, color: '#333' }, children: p.approach })
            ]
          })
        ]
      }),
      p.gallery && p.gallery.length > 0 && (0, x.jsx)('section', {
        style: { padding: isMobile ? '20px 20px 60px' : '40px 5%', maxWidth: 1400, margin: '0 auto 80px' },
        children: (0, x.jsx)('div', {
          style: { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: isMobile ? 16 : 24 },
          children: p.gallery.map((img, i) => (0, x.jsx)('div', {
            key: i,
            style: { borderRadius: isMobile ? 12 : 16, overflow: 'hidden', background: '#e0e0e0', aspectRatio: '4/3' },
            children: (0, x.jsx)('img', { src: img, style: { width: '100%', height: '100%', objectFit: 'cover' } })
          }))
        })
      }),
      (0, x.jsxs)('section', {
        style: { padding: isMobile ? '0 20px 80px' : '0 5% 120px', maxWidth: 1000, margin: '0 auto' },
        children: [
          (0, x.jsx)('h2', { style: { fontFamily: _L, fontSize: isMobile ? 28 : 32, fontWeight: 800, marginBottom: isMobile ? 16 : 24 }, children: "Outcome" }),
          (0, x.jsx)('p', { style: { fontFamily: _F, fontSize: isMobile ? 16 : 18, lineHeight: 1.6, color: '#333' }, children: p.result })
        ]
      }),
      (0, x.jsx)('section', {
        style: { background: '#000', color: '#fff', padding: isMobile ? '80px 20px' : '120px 5%', textAlign: 'center', cursor: 'pointer' },
        onClick: () => onNext(p.nextProject || projectsData[0].slug),
        children: (0, x.jsxs)('div', {
          style: { maxWidth: 800, margin: '0 auto', transition: 'transform 0.3s ease' },
          onMouseEnter: e => { if (!isMobile) e.currentTarget.style.transform = 'scale(1.05)' },
          onMouseLeave: e => { if (!isMobile) e.currentTarget.style.transform = 'scale(1)' },
          children: [
            (0, x.jsx)('div', { style: { fontSize: isMobile ? 12 : 14, fontWeight: 700, color: _R, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 20 }, children: "Next Project" }),
            (0, x.jsxs)('h2', { style: { fontFamily: _L, fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: isMobile ? 12 : 20, flexWrap: 'wrap' }, children: [getProjectBySlug(p.nextProject || projectsData[0].slug).title, (0, x.jsx)('svg', { width: isMobile ? 32 : 48, height: isMobile ? 32 : 48, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, style: { flexShrink: 0 }, children: (0, x.jsx)('path', { d: "M5 12h14M12 5l7 7-7 7" }) })] })
          ]
        })
      })
    ]
  });
}
`;

let newContent = content.substring(0, startIndex) + newFunction + content.substring(endIndex);
fs.writeFileSync('assets/core/index.js', newContent);
console.log('Successfully replaced ProjectDetailPage');
