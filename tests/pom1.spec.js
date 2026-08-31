import {test, expect}from '@playwright/test'

const loginPage = require('../pages/loginPage')

const inventory = require('../pages/Inventory')

//const shopping = require('../pages/shopping')

test('login and add product to cart',async({page})=>{

const login = new loginPage(page)

const Inventory = new inventory(page)

const Shopping = new shopping(page)

await login.openWebsite()

await login.login("standard_user","secret_sauce")

await Inventory.addProducttoCart()

await Inventory.openCart()

await Inventory.removeProduct()


//await Shopping.getProdutName()


})