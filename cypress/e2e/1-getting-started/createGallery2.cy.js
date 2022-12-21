/// <reference types="cypress" />

import { createGalleryPage } from "../../page_object/createGalleryPage"
import { homePage } from "../../page_object/homePage"

describe("Logging in, creating gallery and intercepting its request",() => {
    before(() => {
        cy.Login("nikola.culic@yahoo.com", "vindovs7")
    })

    it("Intercepting create gallery request", () => {
        cy.visit("https://gallery-app.vivifyideas.com/")
        homePage.createGalleryBtnClick()
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/galleries", (req) => {}).as("createGallery")
        createGalleryPage.createGallery("my title", "my desc")
        cy.wait("@createGallery").then((req) => {
            expect(req.response.statusCode).to.eq(201)
            
        })
    })
})