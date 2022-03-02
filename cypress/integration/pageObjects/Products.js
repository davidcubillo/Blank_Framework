class ProductPage {
  goToCheckout() {
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
  }
 
}
//esta linea es para que sea visible en los dif tests
export default ProductPage;
