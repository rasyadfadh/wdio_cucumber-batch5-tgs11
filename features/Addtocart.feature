@AddtoCart
Feature: Add to Cart Test

Background:
Given user is in Home Page

@tc-3
Scenario Outline: Success Add to Cart
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page

@tc-4
Scenario: Remove item from cart in homepage
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user remove the item that was added in the cart