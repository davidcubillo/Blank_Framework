class DeliveryPage {
  fillCountry() {
    return cy.get("#country");
  }
  selectCountry() {
    return cy.get(".suggestions > ul > li > a");
  }
  checkTermsAndConditions() {
    return cy.get('.checkbox')
  }
  puchaseButton() {
    return cy.get('.ng-untouched > .btn')
  }
  termsAndConditionsCheck() {
    return cy.get('.checkbox > label')
  }
  getAlertMessage(){
     return cy.get('.alert')
  }
}

//esta linea es para que sea visible en los dif tests
export default DeliveryPage;
