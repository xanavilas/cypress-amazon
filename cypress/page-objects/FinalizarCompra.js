class FinalizarCompra {

    finalizarCompra() {
        return cy.get('[data-feature-id="proceed-to-checkout-action"]');
    }

    validartURLFinalizarCompra() {
        cy.url().should('include', 'checkout');
    }
}

export default new FinalizarCompra();