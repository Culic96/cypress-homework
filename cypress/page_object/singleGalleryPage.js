class SingleGallery{
    get deleteBtn(){
        return cy.contains("Delete Gallery")
    }

    deleteBtnClick(){
        this.deleteBtn.click()
    }
}

export const singleGallery = new SingleGallery()