import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('CONSOLE ERROR:', msg.text());
    }
  });

  console.log('Navigating...');
  await page.goto('http://localhost:3000/assets/all-works-mobile-carousel/index.html');
  await page.waitForTimeout(2000);
  
  console.log('Done.');
  await browser.close();
})();
