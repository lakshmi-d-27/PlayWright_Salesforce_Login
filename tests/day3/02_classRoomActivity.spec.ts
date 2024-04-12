import {chromium, firefox, webkit, test } from "@playwright/test";
test("To test the browser launch in different browsers", async () => {
    
    const browser_1 = await chromium.launch({channel:"chrome"});
    const browser_2 = await firefox.launch({channel:"firefox"});
    const browser_3 = await chromium.launch({channel:"msedge"});
    
    

    const browserContext_1 = await browser_1.newContext()
    const browserContext_2 = await browser_2.newContext()
    const browserContext_3 = await browser_3.newContext()

    const page_1 = await browserContext_1.newPage()
    const page_2 = await browserContext_2.newPage()
    const page_3 = await browserContext_3.newPage()

    await page_1.goto("https://login.salesforce.com/");
    await page_2.goto("https://login.salesforce.com/");
    await page_3.goto("https://login.salesforce.com/");

})