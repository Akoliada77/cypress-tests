/// <reference types="cypress" />
const {generateID, generateEmail, generateNumbers} = require('../../library/helpers')
const {username, password, authorazation} = require('../../fixtures/creds.json')
const url = 'https://restful-booker.herokuapp.com'

describe('API tests', () => {
    let authToken = ''
    let createdBookId = ''

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
    it('Create a new booking via post request', () => {   
        cy.request({
            method: 'POST',
            url: `${url}/booking`,
            headers :{
                "Content-Type" : "application/json"
            },
            body :{
                    "firstname" : "Alex",
                    "lastname" : "Koliada",
                    "totalprice" : generateNumbers(4),
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2022-01-01",
                        "checkout" : "2023-01-01"
                    },
                    "additionalneeds" : "Lunch"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
            let body = JSON.parse(JSON.stringify(response.body))
            createdBookId = body.bookingid
        })
        return createdBookId
    })
    it('Check the created booking using id', () => {   
        cy.request({
            method: 'GET',
            url: `${url}/booking/${createdBookId}`
        }).then(response => {
            expect(response.status).to.eql(200)
            let body = JSON.parse(JSON.stringify(response.body))
            cy.wrap(body).should('be.an', 'object')
            cy.wrap(body).should('have.property', 'firstname', "Alex")
            cy.wrap(body).should('have.property', 'lastname', "Koliada")
            cy.wrap(body).should('have.property', 'totalprice')
            cy.wrap(body).should('have.property', 'depositpaid', true)
            cy.wrap(body).should('have.property', 'bookingdates')
            cy.wrap(body).should('have.property', 'additionalneeds', "Lunch")
        })
    })
    it('Update the created booking via put request', () => {   
        const newFirstName = generateID(8)
        const newSecondName = generateID(7)
        const newTotalPrice = generateNumbers(5)
        cy.request({
            method: 'PUT',
            url: `${url}/booking/${createdBookId}`,
            headers :{
                "Content-Type" : "application/json",
                "Accept" : "application/json", 
                "Cookie" : `token=${authToken}`,
                "Authorization" : authorazation
            },
            body :{
                    "firstname" : newFirstName,
                    "lastname" : newSecondName,
                    "totalprice" : newTotalPrice,
                    "depositpaid" : false,
                    "bookingdates" : {
                        "checkin" : "2021-01-01",
                        "checkout" : "2024-01-01"
                    },
                    "additionalneeds" : "LunchAfterPut"
            }
        }).then(response => {
            expect(response.status).to.eql(200)
            let body = JSON.parse(JSON.stringify(response.body))
            cy.wrap(body).should('have.property', 'firstname', newFirstName)
            cy.wrap(body).should('have.property', 'lastname', newSecondName)
            cy.wrap(body).should('have.property', 'totalprice', Number(newTotalPrice))
        })
    })
    it('Updating the created booking using patch request', () => {   
        const newFirstName = generateID(8)
        const newSecondName = generateID(7)
        const newAdditionalNeeds = generateID(10)
        cy.request({
            method: 'PATCH',
            url: `${url}/booking/${createdBookId}`,
            headers :{
                "Content-Type" : "application/json",
                "Accept" : "application/json", 
                "Cookie" : `token=${authToken}`,
                "Authorization" : authorazation
            },
            body :{
                    "firstname" : newFirstName,
                    "lastname" : newSecondName,
                    "additionalneeds" : newAdditionalNeeds
            }
        }).then(response => {
            expect(response.status).to.eql(200)
            let body = JSON.parse(JSON.stringify(response.body))
            cy.wrap(body).should('have.property', 'firstname', newFirstName)
            cy.wrap(body).should('have.property', 'lastname', newSecondName)
            cy.wrap(body).should('have.property', 'additionalneeds', newAdditionalNeeds)
        })
    })
    it('Deleting the created booking using delete request', () => {   
        cy.log(createdBookId)
        cy.request({
            method: 'DELETE',
            url: `${url}/booking/${createdBookId}`,
            headers :{
                "Cookie" : `token=${authToken}`,
                "Authorization" : authorazation
            }
        }).then(response => {
            expect(response.status).to.eql(201)
            let body = JSON.parse(JSON.stringify(response.body))
            expect(body).to.eq('Created')
        })
    })
    it('Check that the created booking got deleted', () => {   
        cy.request({
            method: 'GET',
            url: `${url}/booking/${createdBookId}`,
            failOnStatusCode: false,
        }).then(response => {
            expect(response.status).to.eql(404)
            let body = JSON.parse(JSON.stringify(response.body))
            expect(body).to.eq('Not Found')
        })
    })


})