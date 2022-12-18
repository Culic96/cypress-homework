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

}

export const createGalleryPage = new CreateGallery()