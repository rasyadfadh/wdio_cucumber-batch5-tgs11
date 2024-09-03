import Page from "./page";
import { $, expect } from '@wdio/globals'

class CompletePage extends Page {

    get backHomeButton() {
        return $('//*[@id="back-to-products"]')
    }

    open(){
        return super.open("checkout-complete.html")
    }

    
    async back(){
        await this.backHomeButton.click()
    }

}

export default new CompletePage();