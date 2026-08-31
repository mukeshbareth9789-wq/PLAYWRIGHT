import {test, expect} from '@playwright/test'

test('visible page screenshot', async({page})=>{

await page.goto('https://www.saucedemo.com/')

const now  = new Date()

const timestamp =

now.getDate() + "-" +

(now.getMonth()+1)+ "-" +

now.getFullYear()+ "-" +

now.getHours()+ "-" +

now.getMinutes()+ "-" +

now.setSeconds();

await page.screenshot({path:"screenshot/"+ timestamp +"_Login4Page.png"})


})

test.skip('Full page screenshot', async({page})=>{

await page.goto("https://www.facebook.com/")

await page.screenshot({path:"screenshot/Login1Page.png",fullPage:true})


})

test.skip('speecific element screenshot', async({page})=>{

await page.goto("https://www.facebook.com/")


const now  = new Date()

const timestamp =

now.getDate() + "-" +

(now.getMonth()+1)+ "-" +

now.getFullYear()+ "-" +

now.getHours()+ "-" +

now.getMinutes()+ "-" +

now.setSeconds();

await page.locator('#_R_1h6kqsqppb6amH1_').screenshot({path:"screenshot/"+ timestamp +"_Login3Page.png"})

})