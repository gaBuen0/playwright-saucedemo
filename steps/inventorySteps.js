import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures.js';
import { users } from '../data/users.js';

const { Given, When, Then } = createBdd(test);

Given('que estou logado no sistema', async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);
});

Then('devo ver 6 produtos na página', async ({ inventoryPage }) => {
  await expect(inventoryPage.products).toHaveCount(6);
});

When('adiciono o primeiro produto ao carrinho', async ({ inventoryPage }) => {
  await inventoryPage.addFirstProductToCart();
});

Then('o carrinho deve mostrar 1 item', async ({ inventoryPage }) => {
  await expect(inventoryPage.cartBadge).toHaveText('1');
});