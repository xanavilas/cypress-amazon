class PesquisaProduto {

  pesquisaProduto(nomeProduto) {
    cy.get('#twotabsearchtextbox').type(nomeProduto);
    cy.get('#nav-search-submit-button').click();
  }

  selecionarProduto(index) {
    cy.get('[data-component-type="s-search-result"]').eq(index).find('.s-image').click({ force: true });
  }
}
    
export default new PesquisaProduto();