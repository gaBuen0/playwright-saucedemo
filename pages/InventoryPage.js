export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.products = page.locator('.inventory_item');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addFirstProductToCart() {
    await this.page.locator('.btn_inventory').first().click();
  }
}