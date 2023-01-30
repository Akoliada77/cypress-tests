// varibales for the page 
const url = 'https://automationteststore.com/'
const bannerSelector = '.banner_container'
const navbarSelector = '#categorymenu'
const productsSelector = '.thumbnail'
const navBarElementsSelector = '#categorymenu > nav > ul > li'
const homeDropDownElementsSelector = '#main_menu > li > a > span'
const bannersSelector = '.oneByOne_item.banner'
const bannerslidesSelector = '#banner_slides'

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
    checkHomeDropDownItems(){
        cy.get(homeDropDownElementsSelector).first().should('have.text', 'Specials')
        .next().should('have.text', 'Account')
        .next().should('have.text', 'Cart')
        .last().should('have.text', 'Checkout')
    }
    bannerChanging(){
        cy.get(bannerslidesSelector).should('have.attr', 'style', 'display: block; left: 0px;')
        cy.get(bannersSelector).first().should('be.visible')
        cy.wait(6000)
        cy.get(bannerslidesSelector).should('have.attr', 'style', 'display: block; left: -960px;')
        cy.wait(6000)
        cy.get(bannerslidesSelector).should('have.attr', 'style', 'display: block; left: -1920px;')
    }

}