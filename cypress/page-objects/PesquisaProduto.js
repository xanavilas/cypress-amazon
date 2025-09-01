
class PesquisaProduto {

  pesquisaProduto(nomeProduto) {
    cy.get('#twotabsearchtextbox').type(nomeProduto);
    cy.get('#nav-search-submit-button').click();
  }

  selecionarProduto(index) {
    cy.get('[data-component-type="s-search-result"]').eq(index).find('.s-image').click({ force: true });
  }

  produtoinexistente(produto) {
    cy.get('.a-spacing-top-small')
      .should('contain', `Nenhum resultado para "${produto}"`);
  }
  }
    
export default new PesquisaProduto();
