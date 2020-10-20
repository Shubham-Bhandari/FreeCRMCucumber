Feature: Free CRM Contacts Feature

Background:
Given user is already on homepage
When title of login page is Cogmento CRM
Then user enters username and password
Then user press on login
Then user is on homepage

@Smoke
Scenario Outline:: Free CRM Create a new contact scenario


Then user mouse click on contact link
Then user clicks on new contact link
Then user enters "<firstname>" and "<lastname>"
Then verify contact is saved or not

Examples:
|firstname | lastname|
|Shubham   | Bhandari|
|Om        | Bhandari|

