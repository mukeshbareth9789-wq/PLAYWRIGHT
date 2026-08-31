import {test,expect} from '@playwright/test'

test('dialog', async({page})=>{

page.goto('')

/*page.once('dialog',async dialog=>{

//check type of the dialog

expect(diloag.type()).tobe('alert')

expect(dialog.mesasge()).tocontain('')
await dialog.accept()
})

page.getByText('').click()*/

//conform alert

/*page.once('dialog',async dialog=>{

//check type of the dialog

expect(diloag.type()).tobe('conform')

expect(dialog.mesasge()).tocontain('')
await dialog.accept()

//await dialog.dismiss()
})

page.getByText('').click()*/

//Promt alert

page.once('dialog',async dialog=>{

//check type of the dialog

expect(diloag.type()).tobe('prompt')

expect(dialog.mesasge()).tocontain('')

await dialog.accept('')



//await dialog.dismiss()
})

page.getByText('').click()


})