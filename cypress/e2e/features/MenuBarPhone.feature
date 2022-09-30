Feature: Test #8 test menu bar in phone size

    Background:
        Given Go to home page
        Given Open window on Iphone XR resolution
    Scenario: Сlose cookie window and check work mune bar
        When Click on the accept and close button
        Then Open the menu bar
        Then Click on 'Products'
        Then Click on 'See all products'
        Then The url will contains the products


    