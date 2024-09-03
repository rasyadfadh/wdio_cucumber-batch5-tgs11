@Overview
Feature: Overview

Background:
Given user is on Login Page

@tc-13
Scenario: Finish purchase
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page
    And user choose the checkout button
    Then user should be redirect to your information page
    Then user input "David" as First Name and "Stan" as Last Name and "112233" as Postal Code
    Then user should be redirected to Overview Page
    When user in overview page click Finish
    Then user should be redirected to complete page

@tc-14
Scenario: Cancel Purchase
    When user login input "standard_user" as username and "secret_sauce" as password
    Then user should be redirected to homepage
    When user in homepage add item into the Cart
    Then user go to cart and should be in cart page
    And user choose the checkout button
    Then user should be redirect to your information page
    Then user input "David" as First Name and "Stan" as Last Name and "112233" as Postal Code
    Then user should be redirected to Overview Page
    When user in overview page click Cancel
    Then user should be redirected to Home page
