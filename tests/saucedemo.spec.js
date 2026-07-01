import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';
import { CartPage } from '../pages/CartPage.js';
import { users } from '../data/users.js';

let loginPage;
let inventoryPage;
let cartPage;

test.beforeEach(async ({ page }) => {
  loginPage = new LoginPage(page);
  inventoryPage = new InventoryPage(page);
  cartPage = new CartPage(page);
  await loginPage.goto();
});

test.describe('Login', () => {
  test('com sucesso', async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });

  test('com credenciais inválidas', async ({ page }) => {
    await loginPage.login(users.invalid.username, users.invalid.password);
    await expect(loginPage.errorMessage).toBeVisible();
  });
});

test.describe('Produtos', () => {
  test('lista 6 produtos após login', async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(inventoryPage.products).toHaveCount(6);
  });

  test('adicionar produto ao carrinho', async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addFirstProductToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');
  });
});

test.describe('Checkout', () => {
  test('fluxo completo', async ({ page }) => {
    await loginPage.login(users.standard.username, users.standard.password);
    await inventoryPage.addFirstProductToCart();
    await cartPage.goto();
    await expect(cartPage.cartItems).toHaveCount(1);
    await cartPage.checkout('Gabriel', 'Silva', '11111');
    await expect(cartPage.successMessage).toHaveText('Thank you for your order!');
  });
});