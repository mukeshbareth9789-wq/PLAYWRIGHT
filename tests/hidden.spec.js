import {test, expect} from '@playwright/test'
import { text } from 'node:stream/consumers'
test('hidden',async({page})=>{

await page.goto('')

await page.locator('').fill('')

await page.locator('').fill('')

await page.locator('').click()

page.locator('').nth(2).click()

page.waitForSelector('')
const option = page.locator('')

const count = await option.count()

for(let i=0;i<count ; i++)
const text = await option.nth(i).innerText()
console.log(text)








})
