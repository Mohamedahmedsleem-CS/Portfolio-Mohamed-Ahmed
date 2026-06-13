import { chromium } from "playwright";

const browser = await chromium.launch();
const page = await browser.newPage();

await page.goto("http://localhost:3000", { waitUntil: "networkidle" });

await page.evaluate(() => {
  localStorage.setItem("portfolio_lang", "ar");
});
await page.reload({ waitUntil: "networkidle" });

const ar = await page.evaluate(() => ({
  lang: document.documentElement.lang,
  bodyFont: getComputedStyle(document.body).fontFamily,
  h1Font: getComputedStyle(document.querySelector("h1")).fontFamily,
}));

await page.evaluate(() => {
  localStorage.setItem("portfolio_lang", "en");
});
await page.reload({ waitUntil: "networkidle" });

const en = await page.evaluate(() => ({
  lang: document.documentElement.lang,
  bodyFont: getComputedStyle(document.body).fontFamily,
}));

console.log(JSON.stringify({ ar, en }, null, 2));
await browser.close();
