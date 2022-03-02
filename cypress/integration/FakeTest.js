/// <reference types="Cypress"/>
describe("My second test suite", function () {
  it("Https request testing", function () {
      cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
      
    cy.intercept(
    {
        method : 'GET',
        url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
    },
    {
        statusCode : 200,
        body    :[
        {"book_name": "RestAssured with Java",
            "isbn": "RSU",
            "aisle": "2301"
        }        ]
    }
    ).as('bookretreivals')
    cy.get("button[class='btn btn-primary']").click()
    //ponemos este wait para esperar hasta que el bookretreivals este terminado
    cy.wait('@bookretreivals')
    

  })
})


