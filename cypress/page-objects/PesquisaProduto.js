import { hasUncaughtExceptionCaptureCallback } from "process";

class PesquisaProduto {

  pesquisaProduto(nomeProduto) {
    cy.get('#twotabsearchtextbox').type(nomeProduto);
    cy.get('#nav-search-submit-button').click();
  }

  selecionarProduto(index) {
    cy.get('[data-component-type="s-search-result"]').eq(index).find('.s-image').click({ force: true });
  }

  produtoinexistente(produto) {
    cy.get('.a-color-state.a-text-bold').then(($mensagem) => {
        const textMensagem = $mensagem.text();
        cy.log(`O texto da mensagem é: "${textMensagem}"`);
        expectmensagem.to.contain(`Nenhum resultado para "${produto}"`)
    })
  }
  }
    
export default new PesquisaProduto();
