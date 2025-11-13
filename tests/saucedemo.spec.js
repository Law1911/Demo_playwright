import { test, expect } from '@playwright/test';

test('Flow: Login -> Add to Cart -> Checkout', async ({ page }) => {
  // a. Login ke homepage
    await page.goto('https://www.saucedemo.com/');
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    await page.click('#login-button');
    
  // b. Klik "Add to cart" pada suatu barang
    await page.click('text=Add to cart');

  // c. Klik icon "Cart" untuk redirect ke page Cart
    await page.click('.shopping_cart_link');
    await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // d. Klik button "Checkout"
    await page.click('#checkout');
    await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');
});
