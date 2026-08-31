class shopping {

    constructor(page){

     this.page =page

     this.cartItem = page.locator('.inventory_item_name')

    }
   async getProdutName(){

 return  await this.cartItem.textContent()

   }

}

module.exports = shopping;