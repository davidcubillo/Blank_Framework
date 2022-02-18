class CheckoutPage {
  checkoutMoveOn() {
    return cy.get(":nth-child(5) > :nth-child(5) > .btn");
  }
  getCheckoutValues(){
    return cy.get("tr td:nth-child(4) strong")
  }
  getTotalValue(){
    return cy.get('h3 > strong')
  }
}

//esta linea es para que sea visible en los dif tests
export default CheckoutPage;
