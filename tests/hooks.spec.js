import { test, expect, chromium } from '@playwright/test'

let browser

let page

test.beforeAll(async () => {

    browser = await chromium.launch()

    page = await browser.newPage()

    await page.goto('https://www.saucedemo.com/')

    expect(page.locator('.login_logo')).toHaveText('Swag Labs')
})

test.beforeEach(async () => {
    await page.locator('id=user-name').fill('standard_user');

    await page.locator('id=password').fill('secret_sauce');

    await page.locator('id=login-button').click();
})

test('Test product page', async () => {

    await expect(page).toHaveURL(/inventory.html/);

    await expect(page.locator('[data-test="title"]')).toHaveText('Products')
})

test('Add product to cart', async () => {

    await page.locator(' #add-to-cart-sauce-labs-backpack').click()

    await expect(page.locator('.shopping_cart_badge')).toHaveText('1')
})


test.afterEach(async ({ }, testInfo) => {

    await page.screenshot({ path: `screenshot/${testInfo.title}.png` })
})


test.afterAll(async () => {

    await page.close()
})

