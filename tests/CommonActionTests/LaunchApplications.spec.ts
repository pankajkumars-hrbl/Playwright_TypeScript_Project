import {test,expect} from "@playwright/test";
test('Launch Applications',async({page}) =>{
    await page.goto('https://xqa.io/practice/');
    await page.setViewportSize({ width: 1620, height: 720 });
    await expect(page).toHaveTitle('40+ Free Automation Testing Practice Exercises | Selenium, Cypress, Playwright | XQA');  
});