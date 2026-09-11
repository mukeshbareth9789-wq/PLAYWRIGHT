import{test, expect} from '@playwright/test';

test('@Login_Page TC_001:Verify URL',async({page})=>{

await page.goto('https://www.saucedemo.com/');

await expect(page).toHaveURL('https://www.saucedemo.com/');

})
//***********************************************************************************
test('@Login_Page TC_002:Verify Page Title', async({page})=>{

await page.goto('https://www.saucedemo.com/');

await expect(page).toHaveTitle('Swag Labs');

})
//***********************************************************************************
test('@Login_Page TC_003:Loggin Allert Message ',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    const Login_Button = await page.locator('#login-button')

    await Login_Button.click();

    const Message = page.getByText('Epic sadface: Username is required');

    await expect(Message).toHaveText('Epic sadface: Username is required')
})
//***********************************************************************************
  test('@Login TC_004: Login with valid User name and Valid Password.',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByText('Login').click();

    await expect(page).toHaveURL(/inventory.html/)

  })
//***********************************************************************************
 test('@Login TC_005: Login with invalid User name and Valid Password.',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('Mukesh');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.getByText('Login').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/')

  })
//***************************************************************************************
  test('@Login TC_006: Login with valid User name and Invalid Password.',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('Mukesh');

    await page.getByText('Login').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/')

  })
//***************************************************************************************
 test('@Login TC_007: Login with Invalid User name and Invalid Password.',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('Mukesh');

    await page.getByPlaceholder('Password').fill('Mukesh');

    await page.getByText('Login').click();

    await expect(page).toHaveURL('https://www.saucedemo.com/')

  })
//***************************************************************************************
    test.skip('@Product_Page TC_008:verify product page title.',async({page})=>{

    await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('Mukesh');

    await page.getByPlaceholder('Password').fill('Mukesh');

    await page.getByText('Login').click(); 

    const product = page.getByText('Products')

    await expect(product).toBeVisible()
})

//*************************************************************************
    test('@Login_Page TC_009: Verify username, password and login field is visible or not in login page. ',async({page})=>{

     await page.goto('https://www.saucedemo.com/');

     const userName=  page.getByPlaceholder('Username');

     const password=   page.getByPlaceholder('Password');

     const loginButton= page.getByText('Login');

     await expect(userName).toBeVisible();

     await expect(password).toBeVisible();

     await expect(loginButton).toBeVisible();
})
//****************************************************************************************
    test('@Login_Page TC_010: Verify username, password and login field is editable or not in login page. ',async({page})=>{

     await page.goto('https://www.saucedemo.com/');

     const userName=  page.getByPlaceholder('Username');

     const password=   page.getByPlaceholder('Password');

     await expect(userName).toBeEditable();

     await expect(password).toBeEditable();

})
//****************************************************************************************
    test('@Login_Page TC_011: Verify username, password and login fields data is entered or not. ',async({page})=>{

     await page.goto('https://www.saucedemo.com/');

     const userName=  page.getByPlaceholder('Username');

     const password=   page.getByPlaceholder('Password');

     const loginButton= page.getByText('Login');

     await userName.fill('standard_user')

     await expect(userName).toHaveValue('standard_user');

     await password.fill('secret_sauce')

     await expect(password).toHaveValue('secret_sauce');

     await loginButton.click()
   
})
//****************************************************************************************
    test('@Login_Page TC_012: Verify username, password and login field is enabled or not in login page. ',async({page})=>{

     await page.goto('https://www.saucedemo.com/');

     const userName=  page.getByPlaceholder('Username');

     const password=   page.getByPlaceholder('Password');

     await expect(userName).toBeEnabled();

     await expect(password).toBeEnabled();

    })
     //********************************************************************************

    test('@Login TC_0013: Verify total products.',async({page})=>{

     await page.goto('https://www.saucedemo.com/');

     await page.getByPlaceholder('Username').fill('standard_user');

     await page.getByPlaceholder('Password').fill('secret_sauce');

     await page.getByText('Login').click();

     const totalitems = page.locator('.inventory_item_name');

     await expect(totalitems).toHaveCount(6);
})
//****************************************************************************************
test.skip('@Login TC_0014: Verify product image.',async({page})=>{

     await page.goto('https://www.saucedemo.com/');

     await page.getByPlaceholder('Username').fill('standard_user');

     await page.getByPlaceholder('Password').fill('secret_sauce');

     await page.getByText('Login').click();

     const bagitem = page.getByAltText('Sauce Labs Backpack')

     await expect(bagitem).toHaveScreenshot('bagitem.png')
})
//***************************************************************************************

