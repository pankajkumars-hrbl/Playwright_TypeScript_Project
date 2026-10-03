import { test, expect } from '@playwright/test';
//import { link } from 'node:fs';

test('has title', async ({ page }) => {
  await page.goto('https://www.practo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practo | Video Consultation with Doctors, Book Doctor Appointments, Order Medicine, Diagnostic Tests/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://www.practo.com/');

  // Click the get started link.
  await page.getByPlaceholder('Search location').click();

  //Click on Kolkata 
  await page.getByText('Salt Lake').click();

  await page.getByRole('link', { name: 'Find Doctors Near You' }).click();
  
});
