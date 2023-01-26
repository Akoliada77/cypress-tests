// varibales for the page 
const url = 'https://automationteststore.com/'
const bannerSelector = '.banner_container'
const navbarSelector = '#categorymenu'

export class Main {
    navigate(){
        cy.visit(url)
    }
    pageIsLoaded(){
        cy.url().should('eq', url)
        cy.get(bannerSelector).should('be.visible')
        cy.get(navbarSelector).should('be.visible')
    }


}