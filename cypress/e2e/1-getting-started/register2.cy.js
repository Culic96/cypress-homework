/// <reference types="cypress" />
import Locators from "../../fixtures/locators.json";
import {faker} from "@faker-js/faker"
describe("Complete register process second homework", () => {
    beforeEach(() => {
        cy.visit("https://gallery-app.vivifyideas.com/register")
    })
    it("Going trough register proces", () => {
        cy.get(Locators.registerForm.firstName).type(faker.name.firstName())
        cy.get(Locators.registerForm.lastName).type(faker.name.lastName())
        cy.get(Locators.registerForm.email).type(faker.internet.email())
        cy.get(Locators.registerForm.password).type(Locators.registerForm.writePassword)
        cy.get(Locators.registerForm.passwordConfirmation).type(Locators.registerForm.writePassword)
        cy.get(Locators.registerForm.checkBox).click()
        cy.get(Locators.registerForm.submitBtn).click()
    })
})