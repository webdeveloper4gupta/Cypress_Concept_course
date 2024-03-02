///<reference types="cypress" />

describe("here i write all my test cases",()=>{
    it("first test case",()=>{
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
        cy.url().should('include','Contact-Us/contactus.html');
        
    })
})