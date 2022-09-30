Feature: Test #5 test logo

    Background:
        Given Go to sing up page
        Given Open window on 2560x1440
    Scenario: Сlose cookie window and Click on the Logo
        When Click on the accept and close button
        Then Click on the Logo
        Then the url will contains the telnyx.com


    