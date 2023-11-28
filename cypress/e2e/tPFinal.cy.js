/// <reference types="cypress" />
//const constantes=require()
import {fixtures} from "../fixtures/fixtures.json"

import { RegisterPage } from "../support/pages/registerPage";
import { LoginPage } from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { OnlineShopPage } from "../support/pages/onlineShopPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";


describe("TP final",()=>{
    const registerPage = new RegisterPage();
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const onlineShopPage = new OnlineShopPage();
    const shoppingCartPage = new ShoppingCartPage();
    let fixtureData;
before(()=>{
    cy.fixture('fixtures').then(data=>{
        fixtureData=data;
    });
});

beforeEach("Precondiciones", () => {
    cy.visit('');
    registerPage.registerToggleDblClick();
    loginPage.typeUserName(Cypress.env().usuario);
    loginPage.typePassword(Cypress.env().contraseña);
    loginPage.clickSubmitButton();
    homePage.clickProductButton();
    
})

it("Verify shopping functionality choosing 2 products and adding them to the shopping cart, verify the names and prices relationship and the total price values",()=>{
    onlineShopPage.addToCartProductButtonClick(fixtureData.blackTShirt.name);
    onlineShopPage.closeAddToCartModalButtonClick(fixtureData.blackTShirt.name);
    onlineShopPage.addToCartProductButtonClick(fixtureData.whitePants.name);
    onlineShopPage.closeAddToCartModalButtonClick(fixtureData.whitePants.name);
    onlineShopPage.goToShoppingCartButtonClick();
    shoppingCartPage.verifyProductName(fixtureData.blackTShirt.name);
    shoppingCartPage.verifyProductPrice(fixtureData.blackTShirt.name,fixtureData.blackTShirt.price);
    
    shoppingCartPage.verifyProductName(fixtureData.whitePants.name);
    shoppingCartPage.verifyProductPrice(fixtureData.whitePants.name,fixtureData.whitePants.price);
    shoppingCartPage.clickShowTotalPrice();
    shoppingCartPage.verifyTotalPrice( parseInt(fixtureData.blackTShirt.price)+ parseInt(fixtureData.whitePants.price));
})
})