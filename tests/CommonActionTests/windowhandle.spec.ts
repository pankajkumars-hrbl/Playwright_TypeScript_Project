import {test,expect} from "@playwright/test";
test('Open New Tab & Validate Content',async({page,context})=>
{
    await page.goto('https://xqa.io/practice/');
    await page.setViewportSize({width:1620,height:720});
    await page.getByRole('main').getByRole('link',{name:'Browser Windows'}).click();
    await page.getByRole('button',{name:'New Tab'}).click();
    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button',{name:'New Tab'}).click()
        
    ]);
    await newPage.waitForLoadState();
     const title=await newPage.title();
     console.log(`New tab title: ${title}`);
     
  // Validate new page
  await expect(newPage).toHaveTitle(/40+ Free Automation Testing Practice Exercises | Selenium, Cypress, Playwright | XQA/);

  // Close new tab
  await newPage.close();

  // Back to main page
  await page.bringToFront()
});

test('Open New Window & Validate Content',async({page,context})=>
{
    await page.goto('https://xqa.io/practice/');
    await page.setViewportSize({width:1620,height:720});
    await page.getByRole('main').getByRole('link',{name:'Browser Windows'}).click();
    const [newPage]=await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('button',{name:'New Window'}).click()
]);
    await newPage.waitForLoadState();
     const title=await newPage.title();
     console.log(`New window title: ${title}`); 
      // Close new tab
  await newPage.close();

  // Back to main page
  await page.bringToFront()
});

