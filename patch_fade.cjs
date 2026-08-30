const fs = require('fs');
let content = fs.readFileSync('assets/core/index.js', 'utf8');

content = content.replace(
/let fadeStart = performance\.now\(\);\s*const fadeDur = 200;\s*function fadeOut\(fNow\) \{\s*const fElapsed = fNow - fadeStart;/g,
`      const fadeDur = 200;
      let fadeStart = null;
      function fadeOut(fNow) {
        if (fadeStart === null) fadeStart = fNow;
        const fElapsed = fNow - fadeStart;`
);

fs.writeFileSync('assets/core/index.js', content);
console.log('Patched fadeStart in fadeOut');
