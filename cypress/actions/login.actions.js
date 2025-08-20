class LoginActions {
    constructor() {
        this.usernameInput = '#user-name'
        this.passwordInput = '#password'
        this.loginButton = '#login-button'
    }

    fillLoginFields(username, password) {
        cy.get(this.usernameInput).click().type(username)
        cy.get(this.passwordInput).click().type(password)
    }

    fillLoginFieldsKeyboard(username, password) {
        cy.get('body').type('{tab}');      // Vai para o campo de username
        cy.focused().type(username);       // Digita username

        cy.focused().type('{tab}');        // Vai para o campo de senha
        cy.focused().type(password);       // Digita senha

        cy.focused().type('{tab}');        // Vai para o próximo elemento
    }

    fillUsernameInput(username) {
        cy.get(this.usernameInput).click().type(username)
    }

    fillPasswordInput(password) {
        cy.get(this.passwordInput).click().type(password)
    }

    clickUsernameInput() {
        cy.get(this.usernameInput).click()
    }

    clickPasswordInput() {
        cy.get(this.passwordInput).click()
    }

    clickLoginButton() {
        cy.get(this.loginButton).click()
    }

    returnPreviousPage() {
        cy.go('back')
    }

    verifyTypeFieldPassword() {
        cy.get(this.passwordInput).should('have.attr', 'type', 'password')
    }

    verifyPasswordIsNotVisible(password) {
        // Garante que a senha digitada NÃO está exposta no DOM como texto
        cy.document().then((doc) => {
            const pageSource = doc.documentElement.innerHTML
            expect(pageSource).not.to.contain(password)
        })
    }
}

export default new LoginActions;