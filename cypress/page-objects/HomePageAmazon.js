class HomePageAmazon {
    visitar() {
        cy.visit('https://www.amazon.pt');
    }

     fecharPopup() {
    cy.get('body').then($body => {
      if ($body.find('.a-button-text:contains("Continue shopping")').length) {
        cy.contains('.a-button-text', 'Continue shopping').click();
      }
    });
  }

    recusarCookies() {
      cy.get('#sp-cc-rejectall-link').click();
    }

    validarValorCarrinho(valor) {
  cy.get('#nav-cart-count').then(($counter) => {
    const count = $counter.text();
    cy.log(`O contador do carrinho tem o valor: ${count}`);
    expect(count).to.eq(valor.toString());
  });
}

}

export default new HomePageAmazon();