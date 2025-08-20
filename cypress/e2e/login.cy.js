const app = require('../support/app');
const { MESSAGES } = require('../support/constants');

describe('Login', () => {
    let login;

    beforeEach(() => {
        cy.visit('/',{failOnStatusCode: false})
        cy.fixture('login').then((massaLogin) => {
            login = massaLogin;
        });
    });

    it('Validar login na aplicação utilizando credenciais válidas', () => {
        app.login.fillLoginFields(login.username.valid, login.password.valid)
        app.login.clickLoginButton()
        //Validação pela URL
        cy.url().should('include', '/inventory.html')
        //Validação por elemento que só aparece após login
        cy.get('.title').should('contain', 'Products')
    })

    it('Validar login na aplicação utilizando credenciais inválidas', () => {
        app.login.fillLoginFields(login.username.invalid, login.username.invalid)
        app.login.clickLoginButton()
        //Validação pela URL
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
        //Validação por elemento que só aparece na tela de login
        cy.get('#login-button').should('contain', 'Login')
        //Validação por mensagem de erro
        cy.get('.error-message-container.error').should('contain', MESSAGES.failure.FM0001)
    });

    it('Validar login na aplicação utilizando username inválido e senha válida', () => {
        app.login.fillLoginFields(login.username.invalid, login.username.valid)
        app.login.clickLoginButton()
        //Validação pela URL
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
        //Validação por elemento que só aparece na tela de login
        cy.get('#login-button').should('contain', 'Login')
        //Validação por mensagem de erro
        cy.get('.error-message-container.error').should('contain', MESSAGES.failure.FM0001)
    });

    it('Validar login na aplicação utilizando username válido e senha inválida', () => {
        app.login.fillLoginFields(login.username.valid, login.password.invalid)
        app.login.clickLoginButton()
        //Validação pela URL
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
        //Validação por elemento que só aparece na tela de login
        cy.get('#login-button').should('contain', 'Login')
        //Validação por mensagem de erro
        cy.get('.error-message-container.error').should('contain', MESSAGES.failure.FM0001)
    });

    it('Validar login na aplicação sem fornecer nenhuma credencial', () => {
        app.login.clickLoginButton()
        //Validação pela URL
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
        //Validação por elemento que só aparece na tela de login
        cy.get('#login-button').should('contain', 'Login')
        //Validação por mensagem de erro
        cy.get('.error-message-container.error').should('contain', MESSAGES.failure.FM0002)
    });

    it('Validar login na aplicação sem fornecer o username', () => {
        app.login.fillPasswordInput(login.password.valid)
        app.login.clickLoginButton()
        //Validação pela URL
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
        //Validação por elemento que só aparece na tela de login
        cy.get('#login-button').should('contain', 'Login')
        //Validação por mensagem de erro
        cy.get('.error-message-container.error').should('contain', MESSAGES.failure.FM0002)
    });

    it('Validar login na aplicação sem fornecer o password', () => {
        app.login.fillUsernameInput(login.username.valid)
        app.login.clickLoginButton()
        //Validação pela URL
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
        //Validação por elemento que só aparece na tela de login
        cy.get('#login-button').should('contain', 'Login')
        //Validação por mensagem de erro
        cy.get('.error-message-container.error').should('contain', MESSAGES.failure.FM0003)
    });

    //FIXME: Não foi encontrado uma forma de automatizar esse cenário. Cenário deve ser testado manualmente!
    it.skip('Validar login na aplicação utilizando teclas do teclado', () => {
        app.login.fillLoginFieldsKeyboard(login.username.valid, login.password.valid)
    });

    it('Validar retorno a página de login utilizando o botão de voltar do navegador', () => {
        app.login.fillLoginFields(login.username.valid, login.password.valid)
        app.login.clickLoginButton()
        app.login.returnPreviousPage()
        //Validação pela URL
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
        //Validação por elemento que só aparece na tela de login
        cy.get('#login-button').should('contain', 'Login')
    });
    //TODO: Cenário será tranferido para a validação da funcionalidade 'Logout' quando criada
    it('Validar logout da aplicação e utilizar o botão de voltar do navegador', () => {
        app.login.fillLoginFields(login.username.valid, login.password.valid)
        app.login.clickLoginButton()
        app.inventory.clickBurgerMenuButton()
        app.inventory.clickLogoutLink()
        app.login.returnPreviousPage()
        //Validação pela URL
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
        //Validação por elemento que só aparece na tela de login
        cy.get('#login-button').should('contain', 'Login')
        //Validação por mensagem de erro
        cy.get('.error-message-container.error').should('contain', MESSAGES.failure.FM0004)
    });

    it('Validar login na aplicação utilizando credenciais inativas', () => {
        app.login.fillLoginFields(login.username.locked, login.password.valid)
        app.login.clickLoginButton()
        //Validação pela URL
        cy.url().should('be.equal', 'https://www.saucedemo.com/')
        //Validação por elemento que só aparece na tela de login
        cy.get('#login-button').should('contain', 'Login')
        //Validação por mensagem de erro
        cy.get('.error-message-container.error').should('contain', MESSAGES.failure.FM0005)
    });

    it('Validar se o campo Password é do tipo password', () => {
        app.login.verifyTypeFieldPassword()
    });
    //TODO: CT será desenvolvido nas sprints futuras
    it.skip('Validar se é possivel copiar o texto do campo Password', () => {
        
    });

    it('Validar se a senha não está visivel na fonte da página', () => {
        app.login.fillLoginFields(login.username.valid, login.password.valid)
        app.login.verifyPasswordIsNotVisible(login.password.valid)
    });
})

