// varibales for the page 
const url = 'https://automationteststore.com/'
const bannerSelector = '.banner_container'
const navbarSelector = '#categorymenu'
const productsSelector = '.thumbnail'

export class Main {
    navigate(){
        cy.visit(url)
    }
    pageIsLoaded(){
        cy.url().should('eq', url)
        cy.get(bannerSelector).should('be.visible')
        cy.get(navbarSelector).should('be.visible')
    }
    defaultAmountOfProducts(){
        cy.get(productsSelector).should('have.length', 16)
    }


}