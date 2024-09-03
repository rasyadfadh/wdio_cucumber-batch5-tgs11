@information
Feature: Add your information

Background:
Given user is on Login Page

@tc-8
Scenario Outline: Add your information
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page
    And user choose the checkout button
    Then user should be redirect to your information page
    Then user input "<firstname>" as First Name and "<lastname>" as Last Name and "<postalcode>" as Postal Code
    Then user should be redirected to Overview Page

   Examples:
    | firstname     | lastname     | postalcode |
    | David         | Stan         | 112233     |

@tc-9
Scenario: Cancel input information
When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page
    And user choose the checkout button
    Then user should be redirect to your information page
    Then user decide to cancel input information
    Then user should be redirect to cartpage

@tc-10
Scenario: Not input First Name
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page
    And user choose the checkout button
    Then user should be redirect to your information page
    Then user click continue
    Then user should see error msg "Error: First Name is required"

@tc-11
Scenario: Not input Last Name
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page
    And user choose the checkout button
    Then user should be redirect to your information page
    Then user input "David" as First Name
    Then user click continue
    Then user should see error msg "Error: Last Name is required"

@tc-12
Scenario: Not input Postal Code
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page
    And user choose the checkout button
    Then user should be redirect to your information page
    Then user input "David" as First Name and "Stan" as Last Name
    Then user click continue
    Then user should see error msg "Error: Postal Code is required"
