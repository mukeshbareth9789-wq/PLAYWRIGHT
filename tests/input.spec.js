import {test,expect} from '@playwright/test'

test('input',async({page})=>{

await page.goto('https://www.techlistic.com/p/selenium-practice-form.html')

const firstName = page.getByPlaceholder('')

//inputbox visible or not
 
await expect(firstName).toBeVisible()

//inputbox enabal or not

await expect(firstName).toBeEnabled()

//input box editable or not

await expect(firstName).toBeEditable

// input value

await firstName.fill('mukesh')


//radiobutton

const radio = page.locator('')

//verify radio button is checked

await radio.check()

await expect(radio).toBeChecked












})