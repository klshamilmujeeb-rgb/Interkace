const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', err => errors.push(err.toString()));
  page.on('console', msg => {
    if (msg.type() === 'error') {
      errors.push(msg.text());
    }
  });
  await page.goto('http://localhost:3000');
  await page.waitForTimeout(2000);
  console.log("Errors captured:");
  console.log(errors);
  await browser.close();
})();
