import {MainPage} from '../../pages/mainPage'
const mainPage = new MainPage

/// <reference types="cypress" />

const productsSelector = '.thumbnail'
const cartPriceSelector = 'div.container-fluid span.cart_total'
const productPriceSelector = '.productfilneprice'


describe('E2e tests', () => {

    before(() => {
        mainPage.navigate()
    })
    
    it('Adding products to the cart', () => {
        cy.get(productsSelector).first().click()
        cy.url().should('include', 'product_id=')
        const price = cy.get(cartPriceSelector).its('text')
        cy.log(price)
        // price.should()
        cy.contains('Add to Cart').click()

    })
})