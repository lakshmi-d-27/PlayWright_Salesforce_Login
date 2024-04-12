import { chromium, test } from "@playwright/test";
import { log } from "console";

test("Login to Salesforce application", async () => {
   
const browser = await chromium.launch();
const browserContext = await browser.newContext();
const page = await browserContext.newPage();

await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("Your_Email");
await page.locator("#password").fill("Your_Password");
await page.locator("#Login").click();
await page.waitForTimeout(10000);
const pageTitle = await page.title()
console.log(pageTitle);
const pageURL= page.url();
console.log(pageURL);





})