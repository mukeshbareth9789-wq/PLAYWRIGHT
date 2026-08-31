import {test,expect} from '@playwright/test'

test('multiple',async({page})=>{

await page.goto('')

//go child tab

const [childPage] = await promise.all([page.context().waitForEvent('page'),page.locator().click()])

await childPage.waitForLoadState()

//switch parent tab

page.bringToFront()

await childPage.close()

})