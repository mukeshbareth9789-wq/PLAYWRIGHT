import {test, expect} from '@playwright/test'

test('soft',async({page})=>{

await page.goto('https://www.saucedemo.com/')

//verify page title

await expect.soft(page).toHaveTitle('Swag Labsss')

//verify url 

await expect.soft(page).toHaveURL('https://www.saucedemo.com/')

//enter user name and password

const userNamne = page.getByPlaceholder('Username')

const password = page.getByPlaceholder('Password')

const button = page.getByRole('button',{name:'Login'})

await userNamne.fill('standard_user')

await password.fill('secret_sauce')

await button.click()


}
)