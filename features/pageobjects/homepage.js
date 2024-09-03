import Page from "./page";
import { $, expect } from '@wdio/globals'


class HomePage extends Page{

    get cartIcon(){
        return $("#shopping_cart_container")
    }
    get addToCartButton(){
        return $("#add-to-cart-sauce-labs-backpack")
    }

    get addToCartButton2(){
        return $('//*[@id="add-to-cart-sauce-labs-bike-light"]')
    }

    get productImage() {
        return $("#item_0_img_link")
    
    }

    get removeitem(){
        return $("#remove-sauce-labs-backpack")
    }

    async validateHomePage(){
        await expect(this.cartIcon).toBeExisting();
        await expect(this.addToCartButton).toBeExisting();
        await expect(this.productImage).toBeExisting();
    
    }
    async addFirstItemToCart() {
        await this.addToCartButton.click();
    }

    async addSecondItemtoCart(){
        await this.addToCartButton2.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }

    async removeitemfromcart(){
        await this.removeitem.click();
    }
    
    open(){
        return super.open("inventory.html")
    }

}

export default new HomePage();