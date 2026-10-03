
import {test,expect} from "@playwright/test";
test('Checkbox Sceanrios',async({page}) =>{

    await page.goto('https://xqa.io/practice/');
    await page.setViewportSize({ width: 1620, height: 720 });
    await page.getByRole('main').getByRole('link',{name:'Check Box'}).click();
    await page.getByRole('button',{name:'Expand all'}).click();
    const desktopCheckbox = page.locator('text=Desktop').locator('xpath=preceding-sibling::div');;
    await desktopCheckbox.click();
    const txtdesktop=await page.getByText('desktop', { exact: true }).textContent();
    console.log(txtdesktop);


});