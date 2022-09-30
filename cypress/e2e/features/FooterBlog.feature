Feature: Test #15 Test blog in footer

    Background:
        Given Go to home page
        Given Open window on 2560x1440
    Scenario: Сlose cookie window and go to blog in the footer and click
        When Click on the accept and close button
        Then Go to 'Blog' in footer and click
        Then The url will contains resoursces



    