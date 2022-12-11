/// <reference types="cypress" />

describe("Complete register process", () => {
    it("Going trough register proces", () => {
        cy.visit("https://gallery-app.vivifyideas.com/register")
        cy.get("#first-name").type("Test123")
        cy.get("#last-name").type("Testeric")
        cy.WriteEmail("test123@yahoo.com")
        cy.get("#password").type("12345678")
        cy.get("#password-confirmation").type("12345678")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit").click()
    })
})