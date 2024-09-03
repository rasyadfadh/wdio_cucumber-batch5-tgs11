@Checkout
Feature:Checkout

Background:
Given user is in Home Page

@tc-6
Scenario: Go to Checkout
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page
    And user choose the checkout button
    Then user should be redirect to your information page

@tc-7
Scenario: Continue Shopping and Add more item
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page
    And user choose to continue Shopping
    Then user is back at Home Page
    Then user add one more item into the cart
    Then user go to cart and should be in cart page
    Then user checkout
    

