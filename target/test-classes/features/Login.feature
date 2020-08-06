@LoginPage

  Feature: Login Feature

    Background: I am on Facebook home page

      Scenario Outline: Verify invalid login for multiple users
        When I enter <username> into username field on the login page
        And I enter <password> into password field on the login page
        And I click on (login button|create account) on home screen
        Then I verify invalid credentials

        Examples:

        | username          | password |
        | hayriye@gmail.com | test1234 |
        | jilly@gmail.com | test12345 |
        | jelly@gmail.com | test123467 |