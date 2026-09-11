const {test,expect}= require('@playwright/test');

const logindata = require('../test-data/logindata.json');

test('TC_001: Login with valid User name and Valid Password',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(logindata[0].username);

    await page.getByPlaceholder('Password').fill(logindata[0].password);

    await page.getByText('Login').click();

    await expect(page).toHaveURL(/inventory.html/)

})

//************************************************************************************* 

test('TC_002: Login with invalid User name and Valid Password',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(logindata[1].username);

    await page.getByPlaceholder('Password').fill(logindata[1].password);

    await page.getByText('Login').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/')

})
//************************************************************************************* 

test('TC_003: Login with invalid User name and inValid Password',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(logindata[2].username);

    await page.getByPlaceholder('Password').fill(logindata[2].password);

    await page.getByText('Login').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/')

})
//******************************************************************************************
test('TC_004: Login with valid User name and inValid Password',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill(logindata[3].username);

    await page.getByPlaceholder('Password').fill(logindata[3].password);

    await page.getByText('Login').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/')

})
