Feature: Test #6 Try for free button

    Background:
        Given Go to home page
        Given Open window on 2560x1440
    Scenario: Сlose cookie window and Click try for free
        When Click on the accept and close button
        Then Write 'test@gmail.com' in the Email field
        Then Click on the Try for free button
        Then The url will contains the email
        Then Chack field 'work email'


    