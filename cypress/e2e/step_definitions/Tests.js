import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("Go to home page", () => {
  cy.visit("https://telnyx.com/");
});

Given("Open window on 2560x1440", () => {
  cy.viewport(2560, 1440);
})

Given("Open window on Iphone XR resolution", () => {
  cy.viewport(414, 896);
})

Given("Go to sing up page", () => {
  cy.visit("https://telnyx.com/sign-up");
});

When("Click on the accept and close button", () => {
  cy.get('[class$="UnEoi itIjRb"]').click();
});

Then("the url will contains the telnyx.com", () => {
  cy.url().should("contains", "https://telnyx.com/");
});

Then("Click on the Sing up button", () => {
  cy.get('li [class$="hBNXWZ mchNoDecorate sign-up-link"]').click();
});

Then("The url will contains the sign-up", () => {
  cy.url().should('eq', 'https://telnyx.com/sign-up');
});

Then("Click on the Talk to an expert button", () => {
  cy.get('[class$="byuCMl"] [class$="mchNoDecorate"]').click();
});

Then("The url will contains the contact-us", () => {
  cy.url().should("contains", "https://telnyx.com/contact-us");
});

Then("Click on the Explore our products button", () => {
  cy.get('a[class$="hBNXWZ mchNoDecorate"]').scrollIntoView().click();
});

Then("The url will contains the products", () => {
  cy.url().should("contains", "https://telnyx.com/products");
});

Then("Click on the Logo", () => {
  cy.get('#Logo-Dark_svg__Layer_1').click();
});

Then("Write 'test@gmail.com' in the Email field", () => {
  cy.get('[type="email"]').type('test@gmail.com');
});

Then("Click on the Try for free button", () => {
  cy.get('[class="sc-5d3a275a-2 krPznm"]').click();
});

Then("The url will contains the email", () => {
  cy.url().should("contains", "https://telnyx.com/sign-up?email=test@gmail.com");
});

Then("Chack field 'work email'", () => {
  cy.get('#email').should('have.value', 'test@gmail.com');
});

Then("Go to the 'Start your free trial' button and click", () => {
  cy.get('[class$="m mchNoDecorate sign-up-link"]').scrollIntoView().click();
});

Then("Write email in the Email field", () => {
  cy.get('#email').type('test@gmail.com');
});

Then("Eenter the value 'test' in the 'Full name' field", () => {
  cy.get('#full_name').type('test');
});

Then("Enter the value 'test123' in the 'Password' field", () => {
  cy.get('#password').type('test123');
});

Then("Open the menu bar", () => {
  cy.get('[role="button"]').click();
});

Then("Click on 'Products'", () => {
  cy.get('[class="sc-6ef4e600-12 hCNcWq"]').eq(0).click();
});

Then("Click on 'See all products'", () => {
  cy.get('[class="sc-6ef4e600-12 hCNcWq"]').eq(8).click();
});

Then("Chek h2 element in home page", () => {
  cy.get('[class="sc-9ba6bac9-0 dzvaHj"]').find('h2').should('exist');
});

Then("Click on 'Network'", () => {
  cy.contains('Network').click();
});

Then("The url will contains the global-ip-network", () => {
  cy.url().should("contains", "https://telnyx.com/solutions/global-ip-network");
});

When("Click on Try Our Network", () => {
  cy.contains('Try Our Network').click();
});

Then("Click on the Explore SMS API", () => {
  cy.contains('Explore SMS API').click();
});

Then("The url will contains sms-api", () => {
  cy.url().should("contains", "https://telnyx.com/products/sms-api");
});

Then("Click on the Explore Video API", () => {
  cy.contains('Explore Video API').click();
});

Then("The url will contains video-api", () => {
  cy.url().should("contains", "https://telnyx.com/products/video-api");
});
Then("Click on the Learn more", () => {
  cy.contains('Learn more').scrollIntoView().click();
});

Then("Go to 'Sing up' in footer and click", () => {
  cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(28).scrollIntoView().click();
});

Then("Go to 'Blog' in footer and click", () => {
  cy.get('[class="sc-6c41f57a-0 gvobTR"]').eq(11).scrollIntoView().click();
});

Then("The url will contains resoursces", () => {
  cy.url().should("contains", "https://telnyx.com/resources");
});