import Page from "./page";
import { $ } from '@wdio/globals'


class InformationPage extends Page {

    get firstNameTextBox() {
        return $("#first-name")
    }

    get lastNameTextBox() {
        return $("#last-name")
    }

    get postalCodeTextBox(){
        return $("#postal-code")
    }

    get cancelButton(){
        return $('//*[@id="cancel"]')
    }

    get continueButton() {
        return $('//*[@id="continue"]')
    }
    get errorMessage(){
        return $('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]')
    }

    async inputFirstname(firstname){
        await this.firstNameTextBox.setValue(firstname)
    }

    async inputLastname(lastname){
        await this.lastNameTextBox.setValue(lastname)
    }

    async inputPostalCode(postalcode){
        await this.firstNameTextBox.setValue(postalcode)
    }

    async clickContinue(){
        await this.continueButton.click()
    }

    async cancel(){
        await this.cancelButton.click()
    }

    async information(firstname, lastname, postalcode){
       await this.inputFirstname(firstname)
       await this.inputLastname(lastname)
       await this.inputPostalCode(postalcode)
       await this.clickContinue()
    }

    async validateEmptyText(errorMessage){
        await expect(this.errorMessage).toHaveText(
            expect.stringContaining(errorMessage)
        )
    }


    open(){
        return super.open("")
    }

}

export default new InformationPage();