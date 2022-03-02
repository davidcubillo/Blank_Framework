/// <reference types="Cypress"/>

describe('Practica 1',function()
{
    it ('Practica de locators',function()
    {
        //Test Cases
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get('.search-keyword').type('ca')
        // should es una forma de assertion adentro se le mete la condicion que queremos con el have
        // para atributos o cantidades
        cy.wait(2000)
        //Podemos usar javascript para decirle que solo utilice elementos visibles entonces el product quedaria asi
        // originalmente es asi cy.get('.product').should('have.length',4)
        
        //cy.get('.product:visible').should('have.length',4)
        //Parent child chaining
        //find puede atarser cuando hay varios elements y solo queremos que busque 
        //en cierta parte concatenemos en este caso el div producs y luego product


        //Existe una forma de pasar un locator a una variable y no tener que repetir el mismo css simpre
        // se llama alias
        //cy.get('.products')as('productLocator')
        //para llamarlo basta con poner @nombredeelalias en el get ejemplo
        //cy.get('.products').as('productLocator')
        cy.get(".products").as("productLocator")

        cy.get('@productLocator').find('.product').should('have.length',4)
        //con el eq podemos hablar con un elemento en especifico
        // AQUI DECIDMOS BUSQUE EL DIV PRODUCTS, SAQUE EL PRODUCTO QUE ESTA EN LA POSICION DOS Y BUSQUE EL ADD TO CART Y DELE CLICK

        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productLocator').find('.product').each(($el, index, $list) =>
        {
            const textVeg =$el.find('h4.product-name').text()
            if(textVeg.includes('Cashews'))
            cy.wrap($el).find('button').click()
            
        }
        )
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Orderss').click()

    })
    
}
)