import {test, expect} from '@playwright/test'

test('fram', async({page})=>{

await page.goto('')

/*const allframe = page.frames()

console.log(allframe.length)

const frame1= page.frameLocator('')

await frame1.locator('').fill('')*/

//nested iframe

const parantframe = page.frame('')

await expect (parantframe.locator('')).toHaveText('')
//switch to child fraime

const childFrame = parantframe.frameLocator('')

await expect(childFrame.locator('')).toHaveText('')



})