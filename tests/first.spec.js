
const{test,expect}=require('@playwright/test')

test('open google page',async({page})=>{

await page.goto("https://www.google.com")

const pagetitle = await page.title()

console.log("page title is", pagetitle)

const pageurl =page.url()

console.log("page url is" , pageurl)

await expect(page).toHaveTitle(/Google/);

}

)