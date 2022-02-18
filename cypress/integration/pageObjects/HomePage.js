class HomePage {
  getEditBox() {
    return cy.get("input[name='name']:nth-child(1)");
  }
  getTwoWayDataBinding() {
    return cy.get(":nth-child(4) > .ng-valid");
  }
  getGender() {
    return cy.get("select");
  }
  getRadioButtonDisabled() {
    return cy.get("#inlineRadio3");
  }
  getShopTab() {
    return cy.get(":nth-child(2) > .nav-link");
  }
}
//esta linea es para que sea visible en los dif tests
export default HomePage;
