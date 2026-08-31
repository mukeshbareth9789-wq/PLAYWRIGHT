import {test, expect} from '@playwright/test'

test('login and add product to cart',async({page})=>{

     await page.goto('https://www.saucedemo.com/')

     await page.locator('id=user-name').fill('standard_user');

     await page.locator('id=password').fill('secret_sauce');

     await page.locator('id=login-button').click();

     await page.locator(' #add-to-cart-sauce-labs-backpack').click()

     await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

     await page.click('#react-burger-menu-btn')

     await page.click('#logout_sidebar_link')
})

test('Remove product to cart',async({page})=>{

    await page.goto('https://www.saucedemo.com/')

     await page.locator('id=user-name').fill('standard_user');

     await page.locator('id=password').fill('secret_sauce');

     await page.locator('id=login-button').click();

     await page.locator(' #add-to-cart-sauce-labs-backpack').click()

     await expect(page.locator('.shopping_cart_badge')).toHaveText('1')

     await page.locator('#remove-sauce-labs-backpack').click()

     await expect(page.locator('.shopping_cart_badge')).toHaveCount(0)

     await page.click('#react-burger-menu-btn')

     await page.click('#logout_sidebar_link')





})
