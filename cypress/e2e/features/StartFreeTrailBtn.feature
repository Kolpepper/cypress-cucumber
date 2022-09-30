Feature: Test #7 test Start your free trail

    Background:
        Given Go to home page
        Given Open window on 2560x1440
    Scenario: Сlose cookie window and fill in the fields
        When Click on the accept and close button
        Then Go to the 'Start your free trial' button and click
        Then The url will contains the sign-up
        Then Write email in the Email field
        Then Eenter the value 'test' in the 'Full name' field
        Then Enter the value 'test123' in the 'Password' field 


    