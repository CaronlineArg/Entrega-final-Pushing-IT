export class RegisterPage {
    constructor(){

        this.registerToggleLink="#registertoggle";
    }
    registerToggleDblClick(){
        cy.get(this.registerToggleLink).dblclick();
    }
 
}