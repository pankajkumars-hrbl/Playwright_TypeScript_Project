import {test,expect} from '@playwright/test';
test('Handle Static Dropdown ',async({page}) =>{
await page.goto('https://xqa.io/practice/')
await page.setViewportSize({ width: 1620, height: 890 });
await page.locator('a').filter({ hasText: 'Select Menu' }).last().click;
await page.getByLabel('Select Menu').isVisible;
await page.locator('#oldSelectMenu').selectOption('Blue');

});