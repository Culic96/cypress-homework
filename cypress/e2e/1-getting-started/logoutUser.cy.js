/// <reference types="cypress" />
import {homePage} from "../../page_object/homePage"
describe("Loging through backend and intercepting logout request",() => {
    before(() => {
        cy.Login("nikola.culic@yahoo.com", "vindovs7")
    })

    it("Intercept logout request", () => {
        cy.visit("https://gallery-app.vivifyideas.com/")
        homePage.logoutBtn.should("be.visible")
        cy.intercept("POST", "https://gallery-api.vivifyideas.com/api/auth/logout", (req) => {}).as("logoutUser")
        homePage.logoutBtnClick()
        cy.wait("@logoutUser").then((req) => {
            expect(req.response.statusCode).to.eq(200)
        })
    })
})