import {test,expect} from '@playwright/test'

test('boot',async({page})=>{

await page.goto('')

page.locator('').click()

const boot = page.locator('')

const total = await boot.count()

//verify 10options in the list

await expect(boot).toHaveCount(10)

//select the value in list

const value =['a','b','c','d']

for(let i= 0; i,total;i++){

    const item = boot.nth(i)

    const text =(await item.textContent()).trim()

    if(value.includes(text))

        await item.locator('').check()


}




})