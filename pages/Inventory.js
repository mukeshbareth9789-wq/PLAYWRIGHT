class inventory{
constructor(page){
this.page = page
this.addtoCartButton = page.locator('#add-to-cart-sauce-labs-backpack')
this.shoppingCart = page.locator('.shopping_cart_link')
this.removeButton = page.locator('#remove-sauce-labs-backpack')
}
async addProducttoCart(){
  await this.addtoCartButton.click()
}
async openCart(){
await this.shoppingCart.click()
}
async removeProduct(){
 await this.removeButton.click()
}
}
module.exports = inventory;