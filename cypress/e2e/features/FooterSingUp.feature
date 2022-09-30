Feature: Test #14 Test sing up in footer

    Background:
        Given Go to home page
        Given Open window on 2560x1440
    Scenario: Сlose cookie window and go to sing up in the footer and click
        When Click on the accept and close button
        Then Go to 'Sing up' in footer and click
        Then The url will contains the sign-up




    