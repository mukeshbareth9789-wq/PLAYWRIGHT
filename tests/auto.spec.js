import {test,expect} from '@playwright/test'

test('auto',async({page})=>{

await page.goto('https://www.cleartrip.com/')

const popup = page.locator('[data-testid ="loginPopup"]')

const closeicon = page.locator(['[data-testid ="closeIcon"]'])

if(await popup.isVisible()){

    await closeicon.click()
}

const input = page.locator('input[placeholder="Where from?"]')

await input.click()

await input.fill('Del')

const sug = page.locator("//div=[@class='mr-1 o-hidden']")

const texts = await sug.allTextContents()
texts.forEach(text=> console.log(text))

sug.first.click()



})