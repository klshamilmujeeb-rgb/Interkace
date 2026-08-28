const fs = require('fs');
const acorn = require('acorn');
const code = fs.readFileSync('assets/core/index.js', 'utf8');
try {
  acorn.parse(code, { ecmaVersion: 2022, sourceType: 'module' });
  console.log('No syntax error');
} catch (e) {
  console.error(e);
}
