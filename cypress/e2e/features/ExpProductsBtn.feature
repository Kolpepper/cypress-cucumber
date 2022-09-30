Feature: Test #4 test Explore our products button

    Background:
        Given Go to home page
        Given Open window on 2560x1440
    Scenario: Сlose cookie window and click on the Explore our products button
        When Click on the accept and close button
        Then Click on the Explore our products button
        Then The url will contains the products


    