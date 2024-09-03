import Page from "./page";
import { $, expect } from '@wdio/globals'

class OverviewPage extends Page {

    get finishButton() {
        return $('//*[@id="finish"]')
    }

    get cancelButton() {
        return $('//*[@id="cancel"]')
    }

    open(){
        return super.open("cart.html")
    }

    
    async finish(){
        await this.finishButton.click()
    }

    async cancel(){
        await this.cancelButton.click()
    }

}

export default new OverviewPage();