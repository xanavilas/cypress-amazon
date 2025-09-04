class FinalizarCompra {

    finalizarCompra() {
        return cy.get('[data-feature-id="proceed-to-checkout-action"]');
    }

    validartURLFinalizarCompra() {
        cy.url().should('include', 'checkout');
    }

    iniciarSessao(email, password) {
        cy.get('#ap_email_login').type(email);
        cy.get('.a-button-input').click();
        cy.get('#ap_password').type(password);
        cy.get('#signInSubmit').click();
        cy.get('#navbar-main').contains('Secure checkout');

    }
}

export default new FinalizarCompra();