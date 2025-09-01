class PesquisaProduto {

  validarValorCArrinho(valor) {
    cy.get('#nav-cart-count').then(($counter) => {
      const count = $counter.text();
      cy.log(`O contador do carrinho tem o valor: ${count}`);
      expect(count).to.include(valor.toString());
    });
  }

  pesquisaProduto(nomeProduto) {
    cy.get('#twotabsearchtextbox').type(nomeProduto);
    cy.get('#nav-search-submit-button').click();
  }

  selecionarProduto(index) {
    cy.get('[data-component-type="s-search-result"]').eq(index).find('.s-image').click({ force: true });
  }
}
    
export default new PesquisaProduto();