const fs = require('fs');
const path = require('path');

function updateSharedLib(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  let startIdx = content.indexOf("h(`div`,{className:`carousel-nav-container`");
  if (startIdx === -1) {
    startIdx = content.indexOf("h(`div`,{style:{position:`absolute`,bottom:36,left:48,right:48,display:`flex`,justifyContent:`space-between`");
  }
  let endIdx = content.indexOf(")]})}var Q_", startIdx);

  if (startIdx === -1 || endIdx === -1) {
    console.error(`Could not locate JSX range in ${filePath}`, startIdx, endIdx);
    return;
  }

  const centeredPillNavJSX = `h(\`div\`,{className:\`carousel-nav-container\`,style:{position:\`absolute\`,bottom:24,left:\`50%\`,transform:\`translateX(-50%)\`,width:\`calc(100% - 40px)\`,maxWidth:\`520px\`,display:\`flex\`,justifyContent:\`space-between\`,alignItems:\`center\`,zIndex:10},children:[f(\`button\`,{type:\`button\`,className:\`carousel-nav-btn carousel-prev-btn\`,onClick:()=>k.current.goToIndex?.(k.current.currentIndex-1),style:{background:\`#FFFBCE\`,backgroundColor:\`#FFFBCE\`,color:\`#000000\`,border:\`none\`,borderRadius:\`9999px\`,padding:\`8px 16px\`,fontFamily:\`'Ubuntu', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif\`,fontSize:\`12.5px\`,fontWeight:550,letterSpacing:\`-0.01em\`,textTransform:\`none\`,cursor:\`pointer\`,display:\`inline-flex\`,alignItems:\`center\`,justifyContent:\`center\`,gap:\`6px\`,lineHeight:1,boxShadow:\`0 1px 4px rgba(0,0,0,0.08)\`,transition:\`all 0.15s ease\`},children:\`← Previous\`}),f(\`div\`,{className:\`carousel-dots-group\`,\"aria-label\":\`Carousel pagination\`,role:\`group\`,style:{display:\`flex\`,gap:6,alignItems:\`center\`,justifyContent:\`center\`},children:(t||Q_).map((e,t)=>f(\`button\`,{type:\`button\`,className:\`pc-dot\`,\"aria-label\":\`Show card \${t+1}\`,\"aria-current\":t===0?\`true\`:void 0,onClick:()=>k.current.goToIndex?.(t),style:{appearance:\`none\`,border:0,height:\`6px\`,width:t===0?\`16px\`:\`6px\`,margin:0,padding:0,borderRadius:\`3px\`,background:t===0?\`#FFFBCE\`:\`#ffffff\`,color:\`#ffffff\`,opacity:t===0?1:.25,cursor:\`pointer\`,transition:\`all 0.35s cubic-bezier(0.16, 1, 0.3, 1)\`}},t))}),f(\`button\`,{type:\`button\`,className:\`carousel-nav-btn carousel-next-btn\`,onClick:()=>k.current.goToIndex?.(k.current.currentIndex+1),style:{background:\`#FFFBCE\`,backgroundColor:\`#FFFBCE\`,color:\`#000000\`,border:\`none\`,borderRadius:\`9999px\`,padding:\`8px 16px\`,fontFamily:\`'Ubuntu', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif\`,fontSize:\`12.5px\`,fontWeight:550,letterSpacing:\`-0.01em\`,textTransform:\`none\`,cursor:\`pointer\`,display:\`inline-flex\`,alignItems:\`center\`,justifyContent:\`center\`,gap:\`6px\`,lineHeight:1,boxShadow:\`0 1px 4px rgba(0,0,0,0.08)\`,transition:\`all 0.15s ease\`},children:\`Next →\`})]})`;

  content = content.substring(0, startIdx) + centeredPillNavJSX + content.substring(endIdx + 1);
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Successfully updated JSX in ${filePath}`);
}

const pathsToUpdate = [
  path.resolve('public/assets/category-carousel/shared-lib.BrPurwek.mjs'),
  path.resolve('public/assets/all-works-mobile-carousel/shared-lib.BrPurwek.mjs')
];

pathsToUpdate.forEach(p => {
  if (fs.existsSync(p)) {
    updateSharedLib(p);
  }
});

