import TestingPage from "./pageObjects/Testing";
/// <reference types="Cypress"/>
describe("Testing Common methods", function () {
    before(function () {
        cy.fixture("example").then(function (data) {
          this.data = data;
          
        });
      });
    it("Manejo de tablas", function () {
     const testingPage = new TestingPage();
     
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
      //cy.selectDropdownwithValue(testingPage.getDrowpdown(),this.data.drowpdown_option)
      //cy.selectDropdownwithIndex(testingPage.getDrowpdown(),this.data.drowpdown_index)
      //cy.checkRadioButton(testingPage.getRadioButton())
      //cy.verifyCheck(testingPage.getRadioButton())
      //cy.verifyUnCheck(testingPage.getRadioButton())
      
       
       //cy.verifyTextofElement(testingPage.getPageH1(),'sss')
        //const ttt = cy.getTextFromLocator(testingPage.getPageH1())
     //cy.clickElement(testingPage.homeBtn())

     cy.verifyTextofElement(testingPage.getPageH1(),"Practice Page")
    });
  });