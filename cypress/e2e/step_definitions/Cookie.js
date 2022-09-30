import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("Go to home page", () => {
  cy.visit("https://telnyx.com/");
});

When("Click on the accept and close button", () => {
  cy.get('[class$="UnEoi itIjRb"]').click();
});

Then("the url will contains the telnyx.com", () => {
  cy.url().should("contains", "https://telnyx.com/");
});
