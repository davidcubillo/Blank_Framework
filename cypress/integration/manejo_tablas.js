/// <reference types="Cypress"/>
describe("My second test suite", function () {
  it("Manejo de tablas", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // en css no usamos el [2] de xpath para encontrar una columna en especifico en lugar de eso usamos el :nth-child(2 o 3 o el que sea)
    cy.get("tr td:nth-child(2)").each((columna, index) => {
      const title = columna.text();
      if (title.includes("Python")) {
        //
        cy.get("tr td:nth-child(2)")
          .eq(index)
          .next()
          .then(function (prices) {
            const price = prices.text();
            cy.log("El titulo es " + title);
            cy.log("El precio es " + price);
          });
      }
    });
  });
});
