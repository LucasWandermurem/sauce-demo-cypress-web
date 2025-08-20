class InventoryActions {
    constructor() {
        this.burgerMenuButton = '#react-burger-menu-btn'
        this.logoutLink = '#logout_sidebar_link'
    }

    clickBurgerMenuButton() {
        cy.get(this.burgerMenuButton).click()
    }

    clickLogoutLink() {
        cy.get(this.logoutLink).click()
    }

    returnPreviousPage() {
        cy.go('back')
    }
}

export default new InventoryActions;