import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { test } from '../fixtures.js';

const { Given, When, Then } = createBdd(test);

Given('adicionei um produto ao carrinho', async ({ inventoryPage, cartPage }) => {
  await inventoryPage.addFirstProductToCart();
  await cartPage.goto();
});

When('finalizo a compra com nome {string} sobrenome {string} e CEP {string}',
  async ({ cartPage }, firstName, lastName, zip) => {
    await cartPage.checkout(firstName, lastName, zip);
});

Then('devo ver a mensagem de pedido confirmado', async ({ cartPage }) => {
  await expect(cartPage.successMessage).toHaveText('Thank you for your order!');
});