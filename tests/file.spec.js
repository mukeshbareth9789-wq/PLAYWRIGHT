import {test,expect} from '@playwright/test'

test('fileupload',async({})=>{

await page.goto('')

//file upload

await page.locator('').setinputfiles('filename')
await page.locator('').click()

//multiple file upload

await page.locator('').setinputfiles(['file1','file2'])

//remove uploaded file
await page.locator('').setinputfiles([])

//drag and drop





})