// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("selectProduct", (productName) => {
  cy.get(".col-lg-3.col-md-6").each((elemento, index, list) => {
    if (elemento.text().includes(productName)) {
      cy.get(".card > .card-footer > .btn").eq(index).click();
    }
  });
});
//Select a value from a Dropdown using Value
//Params :
Cypress.Commands.add("selectDropdownwithValue", (locator, dropdownValue) => {
  cy.get(locator).select(dropdownValue, { force: true });
});
Cypress.Commands.add("selectDropdownwithIndex", (locator, index) => {
  cy.get(locator).select(Number(index));
});
Cypress.Commands.add("checkRadioButton", (locator) => {
  cy.get(locator).check();
});

Cypress.Commands.add("clickElement", (locator) => {
  cy.get(locator).click();
});
Cypress.Commands.add("goTo", (direction) => {
  cy.go(direction)
});

Cypress.Commands.add(
  "Login",
  (userLocator, passLocator, user, password, loginBtn) => {
  cy.get(userLocator).type(user);
  cy.get(passLocator).type(password);
  cy.get(loginBtn).click();
  }
);

Cypress.Commands.add("getNewTabPage", (locator) => {
  cy.get(locator).invoke("removeAttr", "target");
  cy.get(locator).click();
});

//Assertions
Cypress.Commands.add("elementLength", (locator,length) => {
  cy.get(locator).should('have.length',length)
});

Cypress.Commands.add("elementValue", (locator,value) => {
  cy.get(locator).should('have.value',value)
});

Cypress.Commands.add("elementContains", (locator,text) => {
  cy.get(locator).should('contain',text)
});

Cypress.Commands.add("iselementVisible", (locator) => {
  cy.get(locator).should('be.visible')
});

Cypress.Commands.add("verifyTextofElement", (locator, text) => {
  cy.get(locator).then(function(e){
  const t = e.text()
  expect(t).to.contains(text)

});
Cypress.Commands.add("getAlertMessage", (locator, alertText) => {
  cy.get(locator).click();
  cy.on("window:alert", (str) => {
  expect(str).to.equal(alertText);
  });
});

Cypress.Commands.add("getConfirmMessage", (locator, alertText) => {
  cy.get(locator).click();
  cy.on("window:confirm", (str) => {
  expect(str).to.equal(alertText);
  });
});

Cypress.Commands.add("verifyCheck", (locator) => {
  cy.get(locator).should("be.checked");
});
Cypress.Commands.add("verifyUnCheck", (locator) => {
  cy.get(locator).should("not.be.checked");
});
Cypress.Commands.add("verifyTextboxDisabled", (locator) => {
  cy.get(locator).should("be.disabled");
});
Cypress.Commands.add("verifyTextboxEnabled", (locator) => {
  cy.get(locator).should("be.enabled");
});

})

