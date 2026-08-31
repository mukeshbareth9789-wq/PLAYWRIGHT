import{test, expect} from '@playwright'

test('mouse',async({page})=>{

await page.goto('')

//mouse hoover

 page.locator('').hoover()

await expect(page.locator('')).tobevisible()

//right click

await page.locator('').click({button: 'right'})

//drag and drop

await page.locator('').dragto(page.locator(''))

//double click

await page.locator('').dblclick()


})