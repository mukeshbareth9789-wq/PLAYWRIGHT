const{test,expect}=require('@playwright/test');

test('locator',async({page})=>{

await page.goto('https://www.saucedemo.com/');

await page.locator('id=user-name').fill('standard_user');

await page.locator('id=password').fill('secret_sauce');

await page.locator('id=login-button').click();

await expect(page).toHaveURL(/inventory.html/);

await expect(page.locator('.title')).toHaveText('Products');

const productwebelement= page.locator('.title');

expect(productwebelement).toHaveText('Products');


}
)