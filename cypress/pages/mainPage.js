// varibales for the page 
const url = 'https://automationteststore.com/'
const bannerSelector = '.banner_container'
const navbarSelector = '#categorymenu'
const productsSelector = '.thumbnail'
const navBarElementsSelector = '#categorymenu > nav > ul > li> a'

export class MainPage {
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
    checkCategoriesAmount(){
        cy.get(navBarElementsSelector).should('have.length', 8)
    }
    checkCategoriesNames(){
        cy.get(navBarElementsSelector).first().should('have.text', 'Home')
        .next().should('have.text', 'Apparel & accessories')


    }

}