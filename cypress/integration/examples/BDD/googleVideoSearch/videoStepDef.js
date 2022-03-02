import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import GoogleSearch from "../../../pageObjects/GooglePage";
/// <reference types="Cypress" />

const googleSearch = new GoogleSearch();


Given("I open the Landing page", function () {
  cy.visit(Cypress.env("googleURL"));
});
When("I go to the Videos Page", function () {
  cy.typeField(googleSearch.searchField(),'Dogs{enter}')
  cy.clickElement(googleSearch.getImagesTab())
})
And("Validate all the videos are displayed", function () {
  cy.elementLength(googleSearch.getResults(),15)
  cy.get(googleSearch.getResults()).each((element) =>{
    cy.log(element.text())
  })
})
Then("Load a video and check the elements displayed",function(){

})

