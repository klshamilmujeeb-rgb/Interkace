const fs = require('fs');
const content = fs.readFileSync('assets/core/index.js', 'utf8');

const replacement = `function ProjectDetailPage({ slug, onBack, onNext }) {
  let isMobile = W();
  let p = getProjectBySlug(slug);
  let [isScrolled, setIsScrolled] = o.useState(false);

  o.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    let onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [slug]);

  let currentIndex = projectsData.findIndex(proj => proj.slug === slug);
  let prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : projectsData[projectsData.length - 1];
  let nextProjObj = getProjectBySlug(p.nextProject || projectsData[0].slug);

  let titleParts = p.title.split(' ');
  let titleLine1 = titleParts[0];
  let titleLine2 = titleParts.slice(1).join(' ');
  if (!titleLine2) {
    titleLine1 = p.title;
    titleLine2 = "";
  }

  let websiteUrl = p.websiteUrl || "#";

  return (0, x.jsxs)('div', {
    style: { background: '#0a0d12', minHeight: '100vh', width: '100%', overflowX: 'hidden', color: '#ffffff', fontFamily: _L },
    children: [
      (0, x.jsx)(de, { currentView: "project-detail", onAcademy: onBack, onStudio: onBack, aboveOverlay: !0 }),
      (0, x.jsxs)('main', {
        style: { paddingTop: isMobile ? 120 : 160, paddingBottom: isMobile ? 60 : 100, paddingLeft: isMobile ? '20px' : '5%', paddingRight: isMobile ? '20px' : '5%', maxWidth: 1440, margin: '0 auto' },
        children: [
          (0, x.jsx)('div', {
            style: { width: '100%', height: isMobile ? '40vh' : '70vh', minHeight: isMobile ? 300 : 500, borderRadius: isMobile ? 24 : 32, overflow: 'hidden', background: '#1c1c1c', marginBottom: isMobile ? 40 : 60 },
            children: (0, x.jsx)('img', { src: p.heroImage, alt: p.title, style: { width: '100%', height: '100%', objectFit: 'cover' } })
          }),
          (0, x.jsxs)('div', {
            style: { marginBottom: isMobile ? 32 : 48 },
            children: [
              (0, x.jsx)('h1', {
                style: { fontFamily: _L, fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 800, lineHeight: 1, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em', color: _R },
                children: titleLine1
              }),
              titleLine2 && (0, x.jsx)('h1', {
                style: { fontFamily: _L, fontSize: 'clamp(48px, 10vw, 120px)', fontWeight: 800, lineHeight: 1, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em', color: '#ffffff' },
                children: titleLine2
              }),
            ]
          }),
          (0, x.jsxs)('a', {
            href: websiteUrl,
            target: "_blank",
            rel: "noopener noreferrer",
            style: { display: 'inline-flex', alignItems: 'center', gap: 8, background: _R, color: '#000000', padding: isMobile ? '12px 24px' : '16px 32px', borderRadius: 40, fontFamily: _L, fontWeight: 700, fontSize: isMobile ? 14 : 16, textDecoration: 'none', marginBottom: isMobile ? 60 : 100, transition: 'transform 0.3s ease, background 0.3s ease' },
            onMouseEnter: e => e.currentTarget.style.transform = 'scale(1.05)',
            onMouseLeave: e => e.currentTarget.style.transform = 'scale(1)',
            children: [
              "VISIT WEBSITE",
              (0, x.jsx)('svg', { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", style: { transform: 'rotate(-45deg)' }, children: (0, x.jsx)('path', { d: "M5 12h14M12 5l7 7-7 7" }) })
            ]
          }),
          (0, x.jsxs)('div', {
            style: { display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 2fr', gap: isMobile ? 32 : 40, borderTop: '1px solid rgba(255,255,255,0.15)', borderBottom: '1px solid rgba(255,255,255,0.15)', padding: isMobile ? '32px 0' : '40px 0', marginBottom: isMobile ? 60 : 100 },
            children: [
              (0, x.jsxs)('div', {
                children: [
                  (0, x.jsx)('div', { style: { fontFamily: _L, fontSize: 13, fontWeight: 500, color: '#888888', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }, children: "CATEGORY" }),
                  (0, x.jsx)('div', { style: { fontFamily: _L, fontSize: 18, fontWeight: 500, color: _R }, children: p.category || p.type })
                ]
              }),
              (0, x.jsxs)('div', {
                children: [
                  (0, x.jsx)('div', { style: { fontFamily: _L, fontSize: 13, fontWeight: 500, color: '#888888', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }, children: "YEAR" }),
                  (0, x.jsx)('div', { style: { fontFamily: _L, fontSize: 18, fontWeight: 500, color: _R }, children: p.year })
                ]
              }),
              (0, x.jsxs)('div', {
                children: [
                  (0, x.jsx)('div', { style: { fontFamily: _L, fontSize: 13, fontWeight: 500, color: '#888888', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }, children: "STACK" }),
                  (0, x.jsx)('div', {
                    style: { display: 'flex', flexDirection: 'column', gap: 8 },
                    children: p.services.map((svc, i) => (0, x.jsx)('div', { key: i, style: { fontFamily: _L, fontSize: 18, fontWeight: 500, color: '#ffffff' }, children: svc }))
                  })
                ]
              })
            ]
          }),
          (0, x.jsx)('div', {
            style: { maxWidth: 900, marginBottom: isMobile ? 80 : 120 },
            children: (0, x.jsx)('p', {
              style: { fontFamily: _L, fontSize: 'clamp(20px, 4vw, 24px)', fontWeight: 400, lineHeight: 1.5, color: '#cccccc', margin: 0 },
              children: p.description
            })
          }),
          (0, x.jsxs)('div', {
            style: { display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.15)', paddingTop: 40, gap: isMobile ? 24 : 0 },
            children: [
              (0, x.jsxs)('div', {
                onClick: () => onNext(prevProject.slug),
                style: { display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', fontFamily: _L, fontSize: isMobile ? 12 : 14, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'color 0.3s ease' },
                onMouseEnter: e => e.currentTarget.style.color = _R,
                onMouseLeave: e => e.currentTarget.style.color = '#ffffff',
                children: [
                  (0, x.jsx)('span', { style: { color: _R, fontSize: 18 }, children: "←" }),
                  \`\${prevProject.title}\`
                ]
              }),
              (0, x.jsx)('div', {
                onClick: onBack,
                style: { cursor: 'pointer', fontFamily: _L, fontSize: isMobile ? 12 : 14, fontWeight: 700, color: _R, textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'opacity 0.3s ease' },
                onMouseEnter: e => e.currentTarget.style.opacity = 0.7,
                onMouseLeave: e => e.currentTarget.style.opacity = 1,
                children: "BACK TO WORKS"
              }),
              (0, x.jsxs)('div', {
                onClick: () => onNext(nextProjObj.slug),
                style: { display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer', fontFamily: _L, fontSize: isMobile ? 12 : 14, fontWeight: 700, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em', transition: 'color 0.3s ease' },
                onMouseEnter: e => e.currentTarget.style.color = _R,
                onMouseLeave: e => e.currentTarget.style.color = '#ffffff',
                children: [
                  \`\${nextProjObj.title}\`,
                  (0, x.jsx)('span', { style: { color: _R, fontSize: 18 }, children: "→" })
                ]
              })
            ]
          })
        ]
      })
    ]
  });
}`

const lines = content.split('\n');
const startIdx = lines.findIndex(l => l.startsWith('function ProjectDetailPage({'));
const endIdx = lines.findIndex(l => l.startsWith('function ct()')) - 1;

if (startIdx !== -1 && endIdx !== -1) {
  lines.splice(startIdx, endIdx - startIdx + 1, replacement);
  fs.writeFileSync('assets/core/index.js', lines.join('\n'));
  console.log('Successfully replaced ProjectDetailPage');
} else {
  console.log('Failed to find ProjectDetailPage boundaries');
}
