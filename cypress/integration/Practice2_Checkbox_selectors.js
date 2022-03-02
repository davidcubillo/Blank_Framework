/// <reference types="Cypress"/>
describe("Practica 2", function () {
  /* it("Second test Case", function () {

        //Checkbox
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //podemos chequear algo y en la misma linea verificar que esta chequeado con el should
        //con el and podemos concatenar mas validaciones la prumera es should y la segunda seria and
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //Static dropdown
        //simplemente selecccionando el value y encontrando el get
        cy.get('select').as('selector')
        cy.get('@selector').select('Option2').should('have.value', 'option2')

        // Dropdowns variables

        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item').each((element) => {
            if (element.text() == 'India') {
                cy.wrap(element).click()
            }

        }
        )
        cy.get('#autocomplete').should('have.value', 'India')
        
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

    }
    ) */
  /* it("Third Test Case popups control",function()
    {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")   
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
        //WINDOWS:ALERT es el evento que se crea cuando se abre una alerta
        //tenemos que usar una forma diferente cuando se trata de alertas porque cypress las acepta por defecto y en el caso que tengamos
        // que obtener el texto de la alerta tenemos que usar el metodo window:alert y de ahi obtener de la forma en que se ve en el codigo
        cy.on('window:alert', (str)=>
        {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })
        cy.on('window:confirm', (str)=>
        {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    }
    ) */
  it("Como cambiar a otros tabs", function () {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    // en nuestro caso cyprrsss no soporta el cambio de tab, pero se puede elimiar el attributo target en el elemento que damos click para que
    // abra el tab en la misma pantalla y asi eliminamos ese problema
    cy.get("#opentab").invoke("removeAttr", "target");
    cy.get("#opentab").click();
    //tambien vamos a ver controles de navegacion
    //el include es como el contains
    cy.url().should("include", "rahulshettyacademy");
    cy.go("back");
    //como sabemos que url estamos
  });
});
