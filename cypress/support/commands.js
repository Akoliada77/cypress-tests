
// variables
Cypress.Commands.add('openBurgerMenu', () => {
        cy.get(burgerMenuSelector)
            .should('not.exist')
        cy.get(burgerButtonSelector)
            .click() 
        cy.get(burgerButtonSelector)
            .click() 
        cy.get(burgerMenuSelector)
            .should('exist')    
})


