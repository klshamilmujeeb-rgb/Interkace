const fs = require('fs');
let content = fs.readFileSync('assets/core/index.js', 'utf8');

content = content.replace(
/const fadeDur = 200;\s*let fadeStart = null;\s*function fadeOut\(fNow\) \{\s*if \(fadeStart === null\) fadeStart = fNow;\s*const fElapsed = fNow - fadeStart;/g,
`      const fadeDur = 200;
      let fadeStart = performance.now();
      function fadeOut() {
        const fNow = performance.now();
        const fElapsed = fNow - fadeStart;`
);

fs.writeFileSync('assets/core/index.js', content);
console.log('Patched fadeStart in fadeOut');
