import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://qaplayground.com/');
  await page.getByTestId('hero-start-practicing').click();
  await page.getByTestId('new-practice-card-forms').click();
  await page.getByTestId('input-login-email').click();
  await expect(page.getByTestId('btn-login-submit')).toContainText('Login');
  await page.getByTestId('input-login-email').click();
  await page.getByTestId('input-first-name').click();
  await page.getByTestId('input-last-name').click();
  await page.getByText('Last Name *').click();
  await page.getByText('Male', { exact: true }).click();
  await page.getByTestId('btn-personal-submit').click();
});