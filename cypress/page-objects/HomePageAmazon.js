class HomePageAmazon {
    visitar() {
        cy.visit('https://www.amazon.pt');
    }

     fecharpopup() {
    cy.get('body').then($body => {
      if ($body.find('.a-button-text:contains("Continue shopping")').length) {
        cy.contains('.a-button-text', 'Continue shopping').click();
      }
    });
  }

    validarValorCarrinho(valor) {
  cy.get('#nav-cart-count').then(($counter) => {
    const count = $counter.text();
    cy.log(`O contador do carrinho tem o valor: ${count}`);
    // A asserção deve usar a variável 'valor' passada para a função
    expect(count).to.include(valor.toString()); 
  });

}
}

export default new HomePageAmazon();