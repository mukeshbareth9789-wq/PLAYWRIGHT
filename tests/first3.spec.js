
import {test,expect} from '@playwright/test'
import { clear } from 'node:console'

test('inbuiltLocator', async({page})=>{

await page.goto('https://www.saucedemo.com/')

await page.getByPlaceholder('Username').fill('standard_user')

await page.getByPlaceholder('Password').fill('secret_sauce')

await page.getByRole('button',{name:'Login'}).click()

await expect(page).toHaveURL(/inventory.html/)

await expect(page.getByText('Products')).toBeVisible()

await page.getByRole('button',{name:'Add to cart'}).first().click()

await page.getByAltText('Sauce Labs Backpack').click()









}
)