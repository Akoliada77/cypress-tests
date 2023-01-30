import {MainPage} from '../../pages/mainPage'
const main = new MainPage()

/// <reference types="cypress" />

describe('Tests for main page', () => {

    beforeEach(() => {
        main.navigate()
    })
    
    it('Main page is loaded', () => {
        main.pageIsLoaded()
    })
    it('Check default amount of products', () => {
        main.defaultAmountOfProducts()
    })
    it('Check the amount of navbar elements', () => {
        main.checkCategoriesAmount()
    })
    it.skip('Check the names of categories', () => {
        main.checkCategoriesNames()
    })
    it.skip('Check the names of home dropdown elements', () => {
        main.checkHomeDropDownItems()
    })
    it('Check banner changing', () => {
        main.bannerChanging()
    })

})