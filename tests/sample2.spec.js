import {test, expect} from '@playwright/test';

const LoginPage = require('../pages/loginPage');

const inventory = require('../pages/Inventory')

//***************************************************************** 

test('UserLogin',async({page})=>{

const login = new LoginPage(page)

await login.openWebsite()

await login.enterUserName("standard_user")

await login.enterPassword("secret_sauce")

await login.clickLoginButton()

await expect(page).toHaveURL(/inventory.html/)

})

//*******************************************************************************/

test('Add to cart',async({page})=>{

const login = new LoginPage(page)

const inv = new inventory(page)

await login.openWebsite()

await login.enterUserName("standard_user")

await login.enterPassword("secret_sauce")

await login.clickLoginButton()

await inv.addProducttoCart()

await inv.openCart()

await inv.removeProduct()

})

//****************************************************************************