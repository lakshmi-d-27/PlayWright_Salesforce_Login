import { firefox, chromium, test } from "@playwright/test";
import { channel } from "process";
test("Test case to load the url", async () => {

    //const browser = await chromium.launch({headless:false, channel:"chrome"});
    //
    /*since have enabled the headless as false in playwright config under use, 
    have removed the same in the script*/
    const browser  = await firefox.launch({ headless: false, channel:"firefox"});
    const browserContext = await browser.newContext();
    const page = await browserContext.newPage();
    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.waitForTimeout(50000);
    await page.close();
    await browserContext.close();
    await browser.close();


   //
   /* await page.fill("#username", "demosalesmanager");
    await page.fill("[name='PASSWORD']","crmsfa");
    await page.click(".decorativeSubmit");*/



    
})