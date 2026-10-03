import {test, expect } from '@playwright/test';
//import { link } from 'node:fs';

test('Locator byGetRole', async ({ page }) => {
  await page.goto('https://www.practo.com/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Practo | Video Consultation with Doctors, Book Doctor Appointments, Order Medicine, Diagnostic Tests/);
  await page.getByRole('link',{name:'Find Doctors Near You'}).click();
});