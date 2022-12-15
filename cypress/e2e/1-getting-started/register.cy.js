/// <reference types="cypress" />

describe("Complete register process first homework", () => {
    beforeEach(() => {
        cy.visit("https://gallery-app.vivifyideas.com/register")
    })
    it("Going trough register proces", () => {
        cy.get("#first-name").type("test")
        cy.get("#last-name").type("testeric")
        cy.WriteEmail("test123@yahoo.com")
        cy.get("#password").type("idk12345")
        cy.get("#password-confirmation").type("idk12345")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit").click()
    })
})