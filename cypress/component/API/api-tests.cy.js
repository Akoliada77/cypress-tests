/// <reference types="cypress" />
const {generateID, generateEmail, generateNumbers} = require('../../library/helpers')
const {username, password, authorazation} = require('../../fixtures/creds.json')
const url = 'https://restful-booker.herokuapp.com'

describe('API tests', () => {
    let authToken = ''

    it('Health check', () => {
        cy.request({
            method: 'GET',
            url : `${url}/ping`
        }).then(response => {
            expect(response.status).to.eql(201)
            let body = JSON.parse(JSON.stringify(response.body))
            expect(body).to.eq('Created')
        })
    })
    it('Get auth token via post request', () => {
        cy.request({
            method: 'POST',
            url: `${url}/auth`,
            headers :{
                "Content-Type" : "application/json"
            },
            body :{
                username: username,
                password: password
            }
        }).then(response => {
            expect(response.status).to.eql(200)
            let body = JSON.parse(JSON.stringify(response.body))
            authToken = body.token
            expect(authToken.length).to.eql(15)
        }) 
        return authToken
    })
    it('Get ids of all the bookings', () => {   
        cy.request({
            method: 'GET',
            url: `${url}/booking`
        }).then(response => {
            expect(response.status).to.eql(200)
        })
    })
    it('Validate ids of the bookings', () => {   
        cy.request({
            method: 'GET',
            url: `${url}/booking`
        }).then(response => {
            const randomNumber = Math.floor(Math.random()*1000)
            let body = JSON.parse(JSON.stringify(response.body))
            cy.wrap(body[randomNumber]).should('be.an', 'object')
            cy.wrap(body[randomNumber]).should('have.property', 'bookingid')
        })
    })
    it('Validate booking response using id', () => {   
        const randomID = generateNumbers(3)
        cy.request({
            method: 'GET',
            url: `${url}/booking/${randomID}`
        }).then(response => {
            expect(response.status).to.eql(200)
            let body = JSON.parse(JSON.stringify(response.body))
            cy.wrap(body).should('be.an', 'object')
            cy.wrap(body).should('have.property', 'firstname')
            cy.wrap(body).should('have.property', 'lastname')
            cy.wrap(body).should('have.property', 'totalprice')
            cy.wrap(body).should('have.property', 'depositpaid')
            cy.wrap(body).should('have.property', 'bookingdates')
            cy.wrap(body).should('have.property', 'additionalneeds')
        })
    })
    
})