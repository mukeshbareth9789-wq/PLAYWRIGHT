import { test, expect } from '@playwright/test'

test('assertions', async ({ page }) => {

    await page.goto('https://www.saucedemo.com/')

    //page level assertion

    //1.verify page title

    await expect(page).toHaveTitle('Swag Labs')

    //verify pge url

    await expect(page).toHaveURL('https://www.saucedemo.com/')

    // 2.Element state assertion

    const username = page.getByPlaceholder('Username')

    const password = page.getByPlaceholder('Password')

    const loginbutton = page.getByRole('button',{name:'Login'})

    // verify input fields user name password is visible

     await expect(username).toBeVisible()

    await expect(password).toBeVisible()

    await expect(loginbutton).toBeVisible()

    //verify input fields username and password are editable.

    await expect(username).toBeEnabled()

    await expect(password).toBeEnabled()

    await expect(loginbutton).toBeEnabled()

    //Verify input fields username and password are editable

    await expect(username).toBeEditable()

    await expect(password).toBeEditable()

    //3. Text and value assertion

    await username.fill('standard_user')

    await expect(username).toHaveValue('standard_user')

    await password.fill('secret_sauce')

    await expect(password).toHaveValue('secret_sauce')

    await loginbutton.click()

    //count assertion
    
    //verify total numbers of products

     const totalitems = page.locator('.inventory_item_name')

     expect(totalitems).toHaveCount(6)

     //screenshot assertion

     const bagitem = page.getByAltText('Sauce Labs Backpack')

     await expect(bagitem).toHaveScreenshot('bagitem.png')






}
)