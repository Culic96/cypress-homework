/// <reference types="cypress" />

import { createGalleryPage } from "../../page_object/createGalleryPage";
import { homePage } from "../../page_object/homePage";
import { singleGallery } from "../../page_object/singleGalleryPage";

describe("Logging, Creating and Deleting gallery and make interception", () => {
  beforeEach(() => {
    cy.Login("nikola.culic@yahoo.com", "vindovs7");
    cy.visit("https://gallery-app.vivifyideas.com/");
  });

  let currGalleryId = null;

  it("Creating gallery", () => {
    homePage.createGalleryBtnClick();
    cy.intercept(
      "POST",
      "https://gallery-api.vivifyideas.com/api/galleries").as("createGallery");
    createGalleryPage.createGallery("title", "desc");
    cy.wait("@createGallery").then((req) => {
      expect(req.response.statusCode).to.eql(201);
      currGalleryId = req.response.body.id;
    });
  });

  it("Deleting gallery", () => {
    cy.contains("title").click();
    singleGallery.deleteBtn.should("be.visible");
    cy.intercept("DELETE", `https://gallery-api.vivifyideas.com/api/galleries/${currGalleryId}`).as('deleteGallery');
    singleGallery.deleteBtnClick();
    cy.wait("@deleteGallery").then((req) => {
        expect(req.response.statusCode).to.eql(200)
    })
  });

});
