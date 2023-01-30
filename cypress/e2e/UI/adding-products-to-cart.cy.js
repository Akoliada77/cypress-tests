import {MainPage} from '../../pages/mainPage'
const mainPage = new MainPage

/// <reference types="cypress" />

describe('Some e2e tests', () => {

    beforeEach(() => {
        mainPage.navigate()
    })
    
    it('main page is loaded', () => {
        cy.get(bannerSelector)
            .should('be.visible')
    })
})