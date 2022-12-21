class CreateGallery{

    get titleInput(){
        return cy.get("#title")
    }

    get descInput(){
        return cy.get("#description")
    }

    get addImageInput(){
        return cy.get("[placeholder='image url']")
    }

    get addImageBtn(){
       return cy.contains("Add image")
    }

    get arrowUpIcon(){
        return cy.get("[class='fas fa-chevron-circle-up']")
    }

    get arrowDownIcon(){
        return cy.get("[class='fas fa-chevron-circle-down']")
    }

    get removeImageIcon(){
       return cy.get("[class='fas fa-trash']")
    }

    get submitBtn(){
       return cy.contains("Submit")
    }

    get cancelBtn(){
        return cy.contains("Cancel")
    }

    createGallery(title, desc){
        this.titleInput.type(title)
        this.descInput.type(desc)
        this.addImageInput.type("https://www.cypress.io/static/8fb8a1db3cdc0b289fad927694ecb415/cypress-io-logo-social-share.png")
        this.addImageBtn.click()
        this.removeImageIcon.eq(1).click()
        this.submitBtn.click()
    }

}

export const createGalleryPage = new CreateGallery()