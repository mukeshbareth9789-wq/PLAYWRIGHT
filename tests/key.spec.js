import {test, expect} from '@playwright/test'

test('keyboard', async({page})=>{

await page.goto('')

// press a

page.keyboard.press('A')

// enter text

page.keyboard.type('apple')

// copy text

page.keyboard.press('Control+C')

// past text

page.keyboard.press('Control+V')


})