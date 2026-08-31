
import {test,expect} from '@playwright/test';

test('multilocator',async({page})=>{

await page.goto('https://www.saucedemo.com/');


await page.locator('id=user-name').fill('standard_user');

await page.locator('id=password').fill('secret_sauce');

await page.locator('id=login-button').click();

await expect(page).toHaveURL(/inventory.html/);

// locate multielements

const productNames = page.locator('.inventory_item_name')

//count elements

const count = await productNames.count()

console.log('total products:',count)

// print elements

for(let i=0;i<count;i++){

const name = await productNames.nth(i).textContent()
console.log(name)

}

}
)