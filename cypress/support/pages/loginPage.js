export class LoginPage {
    constructor(){
        this.userInput="#user";
        this.passInput="#pass"
        this.submitButton="#submitForm"
    }
    typeUserName(userName){
        cy.get(this.userInput).type(userName)
        
    }
    typePassword(password){
        cy.get(this.passInput).type(password)
    }
    clickSubmitButton(){
        cy.get(this.submitButton).click();
        
    }
}