import Page from "./page";
import { $, expect } from '@wdio/globals'

class CartPage extends Page {

    get checkoutButton() {
        return $('//*[@id="checkout"]')
    }

    get continueShoppingButton() {
        return $('//*[@id="continue-shopping"]')
    }
    
    get cartItemList() { return $('.cart_list'); }


    open(){
        return super.open("cart.html")
    }

    
    async checkout(){
        await this.checkoutButton.click()
    }

    async continue(){
        await this.continueShoppingButton.click()
    }

    async getCartItem(itemName) {
        
        await browser.pause(3000)

        return await this.cartItemList.$(`.inventory_item_name*=${itemName}`);
    }

}

export default new CartPage();