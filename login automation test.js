const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://ramha-trials713.orangehrmlive.com/');
  await page.type('#username', ' Admin');
  await page.type('#password', 'UZn31g@QrB');
  await page.click('#submit');
  await page.waitForNavigation();
  await browser.close();
})();


