import mainPage from './../selectors/mainPage.sel';

export class MainPage {
    navigate(){
        cy.visit(mainPage.url);
    };
    pageIsLoaded(){
        cy.url().should('eq', url);
        cy.get(mainPage.banner).should('be.visible');
        cy.get(mainPage.navBar).should('be.visible');
    };
    defaultAmountOfProducts(){
        cy.get(mainPage.products).should('have.length', 16);
    };
    checkCategoriesAmount(){
        cy.get(mainPage.navBarElements).should('have.length', 8);
    };
    checkCategoriesNames(){
        cy.get(mainPage.navBarElements).first().should('have.text', 'Home')
        .next().should('have.text', 'Apparel & accessories');
    };
    checkHomeDropDownItems(){
        cy.get(mainPage.homeDropDownElements).first().should('have.text', 'Specials')
        .next().should('have.text', 'Account')
        .next().should('have.text', 'Cart')
        .last().should('have.text', 'Checkout');
    };
    bannerChanging(){
        cy.get(mainPage.bannerslides).should('have.attr', 'style', 'display: block; left: 0px;');
        cy.get(mainPage.banners).first().should('be.visible');
        cy.wait(6000);
        cy.get(mainPage.bannerslides).should('have.attr', 'style', 'display: block; left: -960px;');
        cy.wait(6000);
        cy.get(mainPage.bannerslides).should('have.attr', 'style', 'display: block; left: -1920px;');
    };

};