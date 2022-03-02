// <reference types="Cypress"/>
import HomePage from "../integration/pageObjects/HomePage";
import ProductPage from "../integration/pageObjects/Products";
import CheckoutPage from "../integration/pageObjects/Checkout";
import DeliveryPage from "../integration/pageObjects/Delivery";

describe("Primer END To END case", function () {
  // en el before tenemos que llamar al cy. fixture que es el que se encarga
  // de recoger los valores que queremos tomar, se le da un nombre como data por ejemplo
  // y se pone el path en este ejemplo cypress busca automatiucamente ese example

  before(function () {
    cy.fixture("example").then(function (data) {
      this.data = data;
      
    });
  });
  it("Primer ejemplo Del Framework", function () {
    const homePage = new HomePage();
    const productPage = new ProductPage();
    const checkoutPage = new CheckoutPage();
    const deliveryPage = new DeliveryPage();
    
    //se puede declarar globalment en el cypress.json o se puede aplicar aqui para un test en especifico
    //ademas de eso se puede poner en otro lugar del test y va a comenzar a aplicar desde ahi
    Cypress.config('defaultCommandTimeout', 8000)
    Cypress.config('pageLoadTimeout',10000)
    cy.visit(Cypress.env('url'));

    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    //verificamos que la validacion sea minimo de 2 digitos
    //homePage.getEditBox().should("have.attr","minlength","2")
    //verificamos que el radio button este desabilitado
    homePage.getRadioButtonDisabled().should("be.disabled");
    homePage.getShopTab().click();

    //de aqui podemos hacer metodos genericos y solo se envia el parametro
    //ademas podemos usar un ciclo para seleccionar varios elementos al mismo tiempo
    //podemos iterar asi
    this.data.phone.forEach(function (element) {
      cy.selectProduct(element);
    });
    productPage.goToCheckout().click();
    //aqui vamos a verificar que la suma de los elementos es igual al total
    // en este caso como son varios vamos a hacer un ciclo
    // y tirar en un log los valores
    var sum=0
    checkoutPage.getCheckoutValues().each((element) =>
    {   
        
        //hacemos un split y luego lo unimos
        const actualText = element.text()
        var res = actualText.split(" ")
        res = res[1].trim()
        //aqui le decimos que es un number
        sum= Number(sum)+Number(res)
        
    })
    checkoutPage.getTotalValue().then(function(element)
    {
        const amount = element.text()
        var res = amount.split(" ")
        var total = res[1].trim()
        expect(Number(total)).to.equal(Number(sum))

    })

    // nos va a tirar 0 porque como es asincronico va a cargar el sum=0 de arriba entonces usamos un then para decirle espere y luego imprima o de el valor
    //se haria hasta el final del ciclo siempre usamos then en el caso de que ocupemos que haga algo despues de algo
    .then(function()
    {
        cy.log(sum)
    })
    
    checkoutPage.checkoutMoveOn().click();
    
    deliveryPage.fillCountry().type(this.data.country)
    //cy.wait(2000)
    deliveryPage.selectCountry().click()
    deliveryPage.termsAndConditionsCheck().click({force: true})
    deliveryPage.puchaseButton().click()
    //en teoria para los get text hay que usar esto porque el text() no es una funcion de cypress
    //por lo tanto lo mejor es sacar el elemento a una funcion
    // y de ahi podemos pasarlo a una constante y sacar el texto
    // ahi mismo se puede comparar usanto el expect
    // o cualquiera que la documentacion diga
    //includes es igual a contains
    deliveryPage.getAlertMessage().then(function(element)
    {
        const alerta = element.text()
        expect(alerta.includes("Success")).to.be.true
    }
    )
  });
});
