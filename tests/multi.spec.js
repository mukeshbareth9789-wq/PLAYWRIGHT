import {test,expect} from '@playwright/test'

test('multiselect', async({page})=>{

await page.goto('')

const multi = page.locator('')

//select by using value

//multi.selectOption([{value:m1},{value:m2}])

//select by using label

await multi.selectOption([{label:m1},{label:m2}])

await(multi.locator('option:checked')).textContent(['m1','m2'])

//assertions

// verify dropdown is multiselect or not

await expect(multi).toHaveAttribute('multiple')

//verify total no. of values

const option = multi.locator('')

await expect(option).toHaveCount(4)

})