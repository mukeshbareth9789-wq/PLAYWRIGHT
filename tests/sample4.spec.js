import {test, expect} from '@playwright/test';

const LoginPage = require('../pages/loginPage');

const logindata = require('../test-data/logindata.json');

//***************************************************************** 

test('TC001:UserLogin with valid user name and password',async({page})=>{

const login = new LoginPage(page)

await login.openWebsite()

await login.enterUserName(logindata[0].username)

await login.enterPassword(logindata[0].password)

await login.clickLoginButton()

await expect(page).toHaveURL(/inventory.html/)

})
//******************************************************************************* 

test('TC002:UserLogin with invalid user name and password',async({page})=>{

const login = new LoginPage(page)

await login.openWebsite()

await login.enterUserName(logindata[1].username)

await login.enterPassword(logindata[1].password)

await login.clickLoginButton()

await expect(page).toHaveURL('https://www.saucedemo.com/')

})