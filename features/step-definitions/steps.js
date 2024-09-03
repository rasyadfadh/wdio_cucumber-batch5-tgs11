import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page.js';
import HomePage from '../pageobjects/homepage.js';
import CartPage from '../pageobjects/cartpage.js'
import information from '../pageobjects/information.js';
import overview from '../pageobjects/overview.js';
import homepage from '../pageobjects/homepage.js';
import completepage from '../pageobjects/completepage.js';

//Login steps
Given('user is on Login Page', async () => {
    await LoginPage.open()
})  

Then(/^user input "([^"]*)" as username$/, async (username) => {
    await LoginPage.inputUsername(username)
});

Then(/^user input "([^"]*)" as password$/, async (password) => {
    await LoginPage.inputPassword(password)
});

Then(/^user input "([^"]*)" as username and input "([^"]*)" as password$/, async (username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
});


When(/^user click login button$/, async () => {
    await LoginPage.clickLoginButton()});

Then('user should be redirected to homepage', async () => {
  await HomePage.validateHomePage()
})

When('user login input {string} as username and {string} as password', async (username, password) => {
    await LoginPage.inputUsername(username)
    await LoginPage.inputPassword(password)
    await LoginPage.clickLoginButton()
})

Then('user should see error message {string}', async (errorMessage) => {
    await LoginPage.validateWrongPassword(errorMessage)
})

//Home Page step
Given('user is in Home Page', async () => {
    await HomePage.open()
  })


When('user in homepage add item into the Cart', async () => {
    await HomePage.addFirstItemToCart()
})

Then('user go to cart and should be in cart page', async () => {
    await HomePage.goToCart()
})

Then('user remove the item that was added in the cart', async() => {
    await HomePage.removeitemfromcart()
})

//checkout step
Then('user choose the checkout button', async () => {
    await CartPage.checkout()
})

Then('user should be redirect to your information page', async () => {
    
})

Then('user choose to continue Shopping', async () => {
    await CartPage.continue()
})

Then('user is back at Home Page', async () => {
    await homepage.validateHomePageRemove    
})

Then('user add one more item into the cart', async () => {
    await HomePage.addSecondItemtoCart()
})

Then('user checkout', async () => {
    await CartPage.checkout()
})

//information
Then('user input {string} as First Name and {string} as Last Name and {string} as Postal Code', async(firstname,lastname,postalcode) => {
    await information.inputFirstname(firstname)
    await information.inputLastname(lastname)
    await information.inputPostalCode(postalcode)
    await information.clickContinue()
})

Then ('user should be redirected to Overview Page', async() =>{

})

Then('user decide to cancel input information', async () => {
    await information.cancel()
})

Then('user should be redirect to cartpage', () => {
  
})

Then('user click continue', async () => {
    await information.clickContinue()  
})

Then('user should see error msg {string}', async (errormsg) => {
    await information.validateEmptyText(errormsg)
})

Then('user input {string} as First Name', async (firstname) => {
    await information.inputFirstname(firstname)
  })

Then('user input {string} as First Name and {string} as Last Name', async (firstname, lastname) => {
    await information.inputFirstname(firstname)
    await information.inputLastname(lastname)
})

//overview
When('user in overview page click Finish', async () => {
    await overview.finish()
})
  
Then('user should be redirected to complete page', () => {
  
})

When('user in overview page click Cancel', async () => {
    await overview.cancel()
})

Then('user should be redirected to Home page', async () => {
    await HomePage.validateHomePageRemove()
})

//complete
When('user in complete page click back home to return to homepage', async () => {
    await completepage.back()
})

Then('user should be redirected back to homepage', async () => {
    await HomePage.validateHomePage()
})





