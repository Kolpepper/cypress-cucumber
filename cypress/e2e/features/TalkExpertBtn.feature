Feature: Test #3 Talk to an expert button 

    Background:
        Given Go to home page
        Given Open window on 2560x1440
    Scenario: Сlose cookie window and click on the Talk to an expert button
        When Click on the accept and close button
        Then Click on the Talk to an expert button
        Then The url will contains the contact-us


    