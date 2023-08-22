/// <reference types= "cypress" />

export default {

    clicarCadastrar() {
        cy.get('#btnRegister')
            .click()  

    },

    //validarMensagemErro() {
    //
    //    cy.get('.errorLabel')
    //        .then((element) => {
    //            expect(element)
    //            .to.be.visible
    //            expect(element.text()).eq('O campo nome deve ser prenchido')
    //            })
    //    }

    validarMensagemErro(mensagem) {

        cy.get('.errorLabel')
            .should('be.visible')
            .should('have.text', mensagem )
    },

    preencheNome(nome) {

        cy.get('#user')
        .type(nome)

    },

    preencheEmail(email) {
        cy.get('#email')
        .type(email)
    },

    preencheSenha(password) {
        cy.get('#password')
        .type(password)

},

validarMensagemSucesso(nome) {
    cy.get('#swal2-title')
    .should('be.visible')
    .should('have.text', 'Cadastro Realizado!' )

    cy.get('#swal2-html-container')
    .should('be.visible')
    .should('have.text', `Bem vindo ${nome}`)
}

}