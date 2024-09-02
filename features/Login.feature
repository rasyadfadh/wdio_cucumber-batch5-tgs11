@Login
Feature: Login Test

Background:
Given user is on Login Page
  
@positive @tc-1 
  Scenario Outline: Success Buying
    When user login input "<username>" as username and "<password>" as password
    Then user should be redirected to homepage
    When user add item to cart
    Then user should be redirected to cartpage

    Examples:
    | username      | password     |
    | standard_user | secret_sauce |
    | visual_user   | secret_sauce |
    
    
@negative @tc-2
  Scenario: Login with wrong password
    And user input "standard_user" as username
    And user input "wrong_password" as password
    When user click login button
    Then user should see error message "Epic sadface: Username and password do not match any user in this service"


