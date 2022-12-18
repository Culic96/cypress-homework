/// <reference types="cypress" />

import { homePage } from "../../page_object/homePage";
import { createGalleryPage } from "../../page_object/createGalleryPage";

describe("Creating gallery", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
        cy.visit("https://gallery-app.vivifyideas.com/")
    })

    it("Login", () => {
        homePage.loginBtnClick()
        cy.get("#email").type("nikola.culic@yahoo.com")
        cy.get("#password").type("vindovs7")
        cy.get("[type='Submit']").click()
        homePage.homePageBtnClick()
    })

    it("Creating gallery", () => {
        homePage.createGalleryBtnClick()
        createGalleryPage.titleInput.type('What')
        createGalleryPage.descInput.should('be.empty')
        createGalleryPage.addImageInput.should('have.class', 'form-control')
        createGalleryPage.addImageBtn.should('be.visible').and('have.text', 'Add image')
        createGalleryPage.submitBtn.should('be.visible').and('have.text', 'Submit')
        createGalleryPage.cancelBtn.should('be.visible').and('have.class', 'btn btn-custom')
    })

afterEach(() => {
    cy.saveLocalStorage();
})
})