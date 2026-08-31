import {test,expect} from '@playwright/test'

test('checkbox', async({page})=>{

await page.goto('https://www.techlistic.com/p/selenium-practice-form.html') 

const check1 = page.locator('#tool-0')
const check2 = page.locator('#tool-1')
const check3 = page.locator('#tool-2')

/*await check1.check()

await expect(check1).toBeChecked()

await expect(check2).not.toBeChecked()

await expect(check3).not.toBeChecked()

await check1.uncheck()*/

//check by loop

/*const Checkboxes = [check1,check2,check3]

for(const checkbox of Checkboxes){

await checkbox.check()

await expect(checkbox).toBeChecked()

}

//unchek checkboxes

for(const checkbox of Checkboxes){

const ischecked = await checkbox.isChecked()

if(ischecked){

    await checkbox.uncheck()

    await expect(checkbox).not.toBeChecked()
}

}*/

//select first
//await page.locator('').first().check()

// await page.locator('').last().check()

//select checkbox by index

//await page.locator('').nth(1).check()

const allcheckboxes = await page.locator('').all()

const checkcount =  await page.locator('').count()

expect(checkcount).toBeGreaterThan(0)

for(const checkbox of allcheckboxes){

    await ckeckbox.check()
}


})