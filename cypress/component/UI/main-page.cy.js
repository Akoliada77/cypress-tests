import {Main} from '../../pages/Main'
const main = new Main()

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
    it('', () => {
        main.ss()
    })

})