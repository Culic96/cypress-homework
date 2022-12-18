
class RegisterPage{

    get firstNameInput(){
       return cy.get("#first-name")
    }

    get lastNameInput(){
        return cy.get("#last-name")
    }

    get emailInput(){
        return cy.get("#email")
    }

    get passwordInput(){
        return cy.get("#password")
    }

    get passwordConfirmation(){
        return cy.get("#password-confirmation")
    }

    get checkBox(){
        return cy.get("[type='checkbox']")
    }

    get submitBtn(){
        return cy.get("[type='submit']")
    }

    get errMsg(){
        return cy.get("[class='alert alert-danger']")
    }

    registerUser(firstName, lastName, email, password){
        this.firstNameInput.type(firstName)
        this.lastNameInput.type(lastName)
        this.emailInput.type(Math.random() + email)
        this.passwordInput.type(password)
        this.passwordConfirmation.type(password)
        this.checkBox.click()
        this.submitBtn.click()
    }
}


export const registerPage = new RegisterPage()