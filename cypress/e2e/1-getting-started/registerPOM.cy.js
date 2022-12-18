/// <reference types="cypress" />

import { registerPage } from "../../page_object/registerPage"
import {homePage} from "../../page_object/homePage"
describe("Register user", () => {
    beforeEach(() => {
        cy.visit("https://gallery-app.vivifyideas.com/")
        homePage.registerBtn.should('be.visible')
        homePage.registerBtnClick()
    })

    it("Register with valid credentials", () => {
        registerPage.registerUser("test", "testeric", "asd@email.com", "idk12345")
        registerPage.firstNameInput.should("have.value", "test")
        registerPage.lastNameInput.should('have.value', 'testeric')
        registerPage.emailInput.should('be.visible')
        registerPage.passwordInput.should('be.visible').and("have.value", "idk12345")
    })

    it("Register user with invalid credentials", () => {
        registerPage.registerUser("test", "testeric", "asd@email.com", "i")
        registerPage.firstNameInput.should("have.value", "test")
        registerPage.lastNameInput.should('have.value', 'testeric')
        registerPage.emailInput.should('be.visible')
        registerPage.passwordInput.should('be.visible')
        registerPage.errMsg.should('be.visible').and('have.text', "The password must be at least 8 characters.")
    })
})