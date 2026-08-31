import {test,expect} from '@playwright/test'

test('dropdown',async({page})=>{

await page.goto('https://practice.expandtesting.com/dropdown')

//if select tag using in html code

const drop = page.locator('#country')

/*//by using by label

await drop.selectOption({label: 'India'})

await expect(drop).toHaveValue('IN')*/

/*// by value

await drop.selectOption({value: 'India'})

await expect(drop).toHaveValue('IN')*/

// by index

await drop.selectOption({index: 1})

const value = await drop.inputValue()

expect(value).not.toBe('')

//await page.waitForTimeout(5000)

//assersions

//count how many options available in dropdown

/*const options = drop.locator('option')

const optioncount = await options.count()
expect(optioncount).toBeGreaterThan(200)

//validate presence of value
const allcountries = await options.allTextContents()

expect(allcountries).toContain('India')*/

// if select tag is not use in html code for dropdown

const dropdown = page.locator('')

dropdown.click()

const list = page.locator('')

for(let i=0; await list.count(); i++)

const optiontext = await list.nth(i).textContent()

if(optiontext==='India'){

    await list.nth(i).click()
    break;
}



})