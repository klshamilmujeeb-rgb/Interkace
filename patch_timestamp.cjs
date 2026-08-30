const fs = require('fs');
let content = fs.readFileSync('assets/core/index.js', 'utf8');

content = content.replace(
/const duration = 850;\s*let startTime = null;\s*function animateFlight\(now\) \{\s*if \(startTime === null\) startTime = now;\s*const elapsed = now - startTime;/g,
`  const duration = 850;
  let startTime = performance.now();

  function animateFlight() {
    const now = performance.now();
    const elapsed = now - startTime;`
);

fs.writeFileSync('assets/core/index.js', content);
console.log('Patched startTime in animateFlight');
