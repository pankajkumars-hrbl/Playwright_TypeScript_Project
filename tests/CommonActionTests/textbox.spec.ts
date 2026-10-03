import{test,expect} from '@playwright/test'
test('perfom action on Textbox',async({page})=>{

    await page.goto('https://xqa.io/practice/');
    await page.setViewportSize({ width: 1620, height: 720 });
    await page.getByRole('main').getByRole('link', { name: 'Text Box' }).click();
   await page.locator('h2:has-text("Text Box")').isVisible();
   const text=await page.locator('h2:has-text("Text Box")').textContent();
   console.log(text);
   await page.locator('#userName').fill('pankaj singh');
   await page.locator('#userEmail').fill('pankaj.test9@gamil.com');
   await page.locator('#currentAddress').fill('kolkata');
   await page.locator('#permanentAddress').fill('Jynagara Kolkata');
   await page.getByRole('button',{name:'Submit'}).click();

   

});