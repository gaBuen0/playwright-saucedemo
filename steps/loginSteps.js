import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures.js';

const { Given, When, Then } = createBdd(test);

Given('que estou na página de login', async ({ loginPage }) => {
  await loginPage.goto();
});

When('faço login com {string} e {string}', async ({ loginPage }, username, password) => {
  await loginPage.login(username, password);
});

Then('devo ser redirecionado para a página de produtos', async ({ page }) => {
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});

Then('devo ver uma mensagem de erro', async ({ loginPage }) => {
  await expect(loginPage.errorMessage).toBeVisible();
});