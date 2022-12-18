class HomePage{

    get homePageBtn(){
       return cy.contains("All Galleries")
    }

    get loginBtn(){
        return cy.get("[href='/login']")
    }

    get registerBtn(){
        return cy.get("[href='/register']")
    }

    get createGalleryBtn(){
        return cy.get("[href='/create']")
    }

    homePageBtnClick(){
        this.homePageBtn.click()
    }

    loginBtnClick(){
        this.loginBtn.click()
    }

    registerBtnClick(){
        this.registerBtn.click()
    }

    createGalleryBtnClick(){
        this.createGalleryBtn.click()
    }

}

export const homePage = new HomePage()