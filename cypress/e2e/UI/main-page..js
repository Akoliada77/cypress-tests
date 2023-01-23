/// <reference types="cypress" />

//variables for the page

const pageUrl = 'https://rubyroidlabs.dev/services/'
const mainImageSelector = '.styles-module--imgBlock--SNqRi'

describe('Tests for services page', () => {

    beforeEach(() => {
        cy.visit(pageUrl)
    })
    
    it('', () => {
        cy.get(mainImageSelector)
            .should('be.visible')
    })
})