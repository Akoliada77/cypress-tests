/// <reference types="cypress" />

//variables for the page

const pageUrl = 'https://automationteststore.com/'
const bannerSelector = '.banner_container'

describe('Tests for main page', () => {

    beforeEach(() => {
        cy.visit(pageUrl)
    })
    
    it('main page is loaded', () => {
        cy.get(bannerSelector)
            .should('be.visible')
    })
})