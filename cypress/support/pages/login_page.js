/// <reference types= "cypress" />

export default {

    botaoLogin() {

        cy.get('#btnLogin')
            .click()

    },

    preencheEmail(nome) {

        cy.get('#user')
            .type(nome)

    },

    preencheSenha(password) {

    cy.get('#password')
        .type(password)

    },

    
    validarMensagemErro(mensagem) {

        cy.get('.invalid_input')
            .should('be.visible')
            .should('have.text', mensagem )
    },

    validarMensagemSucesso(email) {
        cy.get('#swal2-title')
        .should('be.visible')
        .should('have.text', 'Login realizado' )
    
        cy.get('#swal2-html-container')
        .should('be.visible')
        .should('have.text', `Olá, ${email}`)
    }


}