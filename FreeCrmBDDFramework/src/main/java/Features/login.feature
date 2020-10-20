Feature: Free CRM Login Feature

@Smoke
Scenario: Free CRM Login Test

#Given user is already on homepage
When title of login page is Cogmento CRM
Then user enters username and password
Then user press on login
Then user is on homepage




