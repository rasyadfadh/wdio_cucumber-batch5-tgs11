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

    get continueButton() {
        return $('//*[@id="continue"]')
    }
    get errorMessageFirstName(){
        return $('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]/h3')
    }

    get  errorMessageLastName (){
        return $('//*[@id="checkout_info_container"]/div/form/div[1]/div[4]/h3')
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

    async clickLoginButton(){
        await this.loginButton.click()
    }

    async login(username, password){
       await this.inputUsername(username)
       await this.inputPassword(password)
       await this.clickLoginButton()
    }

    async validateEmptyFirstName(errorMessage){
        await expect(this.errorMessage).toHaveText(
            expect.stringContaining(errorMessage)
        )
    }
    open(){
        return super.open("")
    }

}

export default new InformationPage();