Feature: Login 

    Scenario: login with valid credentials
    Given user is on login page
    Then user enters valid credentials
    Then user navigates to dashboard page

    Scenario: login with invalid credentials
    Given user is on login page
    Then user enters invalid credentials
    Then error messege should be displayed


    
