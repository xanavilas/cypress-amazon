class PaginaDetalheProduto {

    adicionarAoCarrinho() {
        return cy.get('#add-to-cart-button');
    }
    obterMensagemDeValidação() {
    cy.get('.a-box-inner.a-alert-container').then(($alerta) => {
    cy.log(`O texto do alerta é: "${$alerta.text()}"`);
    });
     return cy.get('.a-box-inner.a-alert-container')
    .should('contain.text', 'Adicionado ao carrinho');
}
}

export default new PaginaDetalheProduto();