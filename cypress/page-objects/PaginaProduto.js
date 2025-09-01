class PaginaProduto {

    adicionarAoCarrinho() {
        return cy.get('#add-to-cart-button');
    }
    obterMensagemDeValidação() {
    cy.get('.a-box-inner.a-alert-container').then(($alerta) => {
        const textoAlerta = $alerta.text();
        cy.log(`O texto do alerta é: "${textoAlerta}"`);
        expect(textoAlerta).to.contain('Adicionado ao carrinho');
    })
}}

export default new PaginaProduto();