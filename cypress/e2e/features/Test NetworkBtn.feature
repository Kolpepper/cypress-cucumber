Feature: Test #10 test 'Network' button

    Background:
        Given Go to home page
        Given Open window on 2560x1440
    Scenario: Click button and check urls
        When Click on the accept and close button
        Then Click on 'Network'
        Then The url will contains the global-ip-network
        When Click on Try Our Network
        Then The url will contains the sign-up