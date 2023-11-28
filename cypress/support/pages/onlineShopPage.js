export class OnlineShopPage {
    constructor(){
       
        this.closeAddToCartModalButton="#closeModal";
        this.goToShoppingCartButton="#goShoppingCart";
          }   
    
    addToCartProductButtonClick(productName){
        cy.get(`button[value="${productName}"]`).click();
    }
    closeAddToCartModalButtonClick(){
        cy.get(this.closeAddToCartModalButton).click();
  
    }
    goToShoppingCartButtonClick(){
        cy.get(this.goToShoppingCartButton).click();
         
    }
   
}