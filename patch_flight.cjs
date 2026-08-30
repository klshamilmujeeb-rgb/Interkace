const fs = require('fs');
let content = fs.readFileSync('assets/core/index.js', 'utf8');

content = content.replace(
/const startTime = performance\.now\(\);\s*const duration = 850;\s*function animateFlight\(now\) \{\s*const elapsed = now - startTime;/g,
`  const duration = 850;
  let startTime = null;

  function animateFlight(now) {
    if (startTime === null) startTime = now;
    const elapsed = now - startTime;`
);

fs.writeFileSync('assets/core/index.js', content);
console.log('Patched startTime in animateFlight');
