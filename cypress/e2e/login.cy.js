/// <reference types= "cypress" />

import { Faker, faker } from "@faker-js/faker"
import login_page from "../support/pages/login_page"
import commum_page from "../support/pages/commum_page"

describe ('Login', () => {

    beforeEach('Acessar a tela de Login', () => {

        commum_page.acessarLoginUsuario()

    })

    it('Email inválido', () => {
        
        login_page.preencheEmail(faker.person.fullName())
        login_page.botaoLogin()
        login_page.validarMensagemErro('E-mail inválido.')

    })
    
    it('Senha inválida', () => {
        
        login_page.preencheEmail(faker.internet.email())
        login_page.preencheSenha('12345')
        login_page.botaoLogin()
        login_page.validarMensagemErro('Senha inválida.')

    });
    
    
    it('Login com sucesso',  async () => {

        const email = await faker.internet.email()
        
        login_page.preencheEmail(email)
        login_page.preencheSenha(faker.internet.password())
        login_page.botaoLogin()
        login_page.validarMensagemSucesso(email)

    })

})