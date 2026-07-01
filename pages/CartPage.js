export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.zipInput = page.locator('[data-test="postalCode"]');
    this.continueButton = page.locator('[data-test="continue"]');
    this.finishButton = page.locator('[data-test="finish"]');
    this.successMessage = page.locator('.complete-header');
  }

  async goto() {
    await this.page.goto('/cart.html');
  }

  async checkout(firstName, lastName, zip) {
    await this.checkoutButton.click();
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.zipInput.fill(zip);
    await this.continueButton.click();
    await this.finishButton.click();
  }
}